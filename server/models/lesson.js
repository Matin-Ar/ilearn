const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

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
        required: true
    }
}, {
    timestamps: true
})

lessonSchema.plugin(uniqueValidator)

const Lesson = mongoose.model('Lesson', lessonSchema)

module.exports = Lesson