const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Course = require('../models/course')

const lessonSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    lessonType: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: Number,
        required: true,
        unique: true
    }
}, {
    timestamps: true
})

// check if course exist
lessonSchema.pre('save', async function (next) {
    const lesson = this
    const course = await Course.findById(lesson.courseId)

    if (!course) {
        throw new Error('There is no course with this id!')
    }
    
    next()
})

lessonSchema.plugin(uniqueValidator)

const Lesson = mongoose.model('Lesson', lessonSchema)

module.exports = Lesson