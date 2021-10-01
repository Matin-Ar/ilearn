const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Activation = require('../models/activation')
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    number: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('شماره تلفن اشتباه می باشد')
            }
            if (value.length != 11) {
                throw new Error('شماره تلفن باید 11 رقمی باشد')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    activity: [{
        date: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true,
            default: 0
        }
    }],
    role: {
        type: String,
        required: true,
        trim: true,
        default: 'Admin'
    },
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET )

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.verify = async (number, code) => {
    if(!code){
        throw new Error('Provide code !')
    }
    const user = await Activation.findOne({ number })
    if (!user) {
        throw new Error('You dont have verification code !')
    }
    const isMatch = await bcrypt.compare(code, user.code)
    if(!isMatch) {
        throw new Error("کد تایید نامعتبر می باشد !")
    }
} 

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema)

module.exports = User