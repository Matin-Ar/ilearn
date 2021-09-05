const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    shortdesc: {
        type: String,
        required: true,
        trim: true
    },
    longdesc: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    prerequisite: {
        type: String,
        required: true,
        trim: true
    },
    instructor: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: String,
        required: true,
        trim: true
    },
    badge: {
        type: String,
        required: true,
        trim: true
    },
    demolink: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

// courseSchema.virtual('comments', {
//     ref: 'Comment',
//     localField: '_id',
//     foreignField: 'course'
// })

courseSchema.methods.toJSON = function () {
    const course = this
    const courseObject = course.toObject()

    delete courseObject.avatar

    return courseObject
}

courseSchema.plugin(uniqueValidator)

const Course = mongoose.model('Course', courseSchema)

module.exports = Course