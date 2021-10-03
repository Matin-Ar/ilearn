const express = require('express')
const Lesson = require('../models/lesson')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')

const router = new express.Router()

// add lesson
router.post('/lesson', auth, adminAuth, async (req, res) => {
    try{
        const lesson = new Lesson({
            courseId: req.body.courseId,
            title: req.body.title,
            lessonType: req.body.lessonType,
            position: req.body.position
        })
        await lesson.save()
        res.status(201).send(lesson)
    } catch (e) {
        res.status(400).send({ error: e.message})
    }
})

module.exports = router