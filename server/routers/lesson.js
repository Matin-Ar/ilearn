const express = require('express')
const Lesson = require('../models/lesson')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')

const router = new express.Router()

// add lesson
router.post('/lessons', auth, adminAuth, async (req, res) => {
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

// get 1 lesson by id
router.get('/lessons/:id', async (req, res) => {
    try {
         const lesson = await Lesson.findById(req.params.id)
         if(!lesson){
            throw new Error('There is no lesson!')
        }
         res.status(200).send(lesson)
} catch(e) {
        res.status(400).send({ error: e.message })
    }
})

// get all lessons
router.get('/alllessons/:id', async (req, res) => {
    try {
         const lesson = await Lesson.find({ courseId: req.params.id }, ["title", "position"], { sort: { position : 1 }, limit: parseInt(req.query.limit), skip: parseInt(req.query.skip) })
         res.status(200).send(lesson)
} catch(e) {
        res.status(400).send()
    }
})

module.exports = router