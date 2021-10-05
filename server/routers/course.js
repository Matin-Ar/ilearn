const express = require('express')
const multer = require('multer')
const Course = require('../models/course')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminAuth')
const ps = require('../APIs/parsaspace')
const router = new express.Router()

const upload = multer({
    limits: {
        // fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png|mp4|avi)$/)) {
            return cb(new Error('You can only upload these formats: jpg,hpeg,png,mp4,avi'))
        }
        cb(undefined, true)
    }
})
// add course
router.post('/courses', auth, adminAuth, upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'demo', maxCount: 1 }]), async (req, res) => {
    try {
        const avatarBuffer = req.files.avatar[0].buffer
        const demoBuffer = req.files.demo[0].buffer
        await ps.makeFolder(req.body.title)
        await ps.makeFolder(`${req.body.title}/lesson`)
        const demoFile = await ps.uploadDemo(demoBuffer, req.files.demo[0].originalname, req.body.title)

        if(!JSON.parse(demoFile).downloadLink){
            throw new Error('parsaspace erorr!')
        }

        const course = new Course({
            title: req.body.title,
            price: req.body.price,
            shortdesc: req.body.shortdesc,
            longdesc: req.body.longdesc,
            duration: req.body.duration,
            language: req.body.language,
            prerequisite: req.body.prerequisite,
            instructor: req.body.instructor,
            level: req.body.level,
            badge: "alaki",
            demolink: JSON.parse(demoFile).downloadLink,
            categories: "alaki",
            avatar: avatarBuffer
        })
        await course.save()
        res.status(201).send(course)
    } catch(e) {
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

// get 1 course by id
router.get('/courses/:id', async (req, res) => {
    try {
         const course = await Course.findById(req.params.id)
         if(!course){
             throw new Error('There is no course!')
         }
         res.status(200).send(course)
} catch(e) {
        res.status(400).send({ error: e.message })
    }
})

// get all courses
router.get('/allcourses', async (req, res) => {
    try {
         const course = await Course.find({ }, ["title", "instructor", "categories", "price" , "createdAt" ], { sort: { createdAt : 1 }, limit: parseInt(req.query.limit), skip: parseInt(req.query.skip) })
         res.status(200).send(course)
} catch(e) {
        res.status(400).send()
    }
})

// router.patch('/api/courses/:title', auth, adminAuth, async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['title', 'shortdesc', 'longdesc', 'duration', 'author', 'publisher', 'language', 'numberofvideos', 'filedate', 'quality', 'filesize', 'links']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation || !req.params.title) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     if(req.body.links) {
//         req.body.links = req.body.links.split(',')
//     }

//     try {
//         course = await Course.findOne({ title: req.params.title})
//         if (!course) {
//             throw new Error('Can not find course!')
//         }
//         updates.forEach((update)=> {
//             course[update] = req.body[update]
//         })
//         await course.save()
//         res.send(course)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/api/courses', auth, adminAuth, async (req, res) => {
//     try {
//         const course = await Course.findOne({ title: req.body.title })
//         if(!course) {
//             throw new Error('No course!')
//         }
//         await course.remove()

//         res.send({ message: "Deleted!"})
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.get('/api/courses', async (req, res) => {
//     try {
//         const course = await Course.find({ }, null, { sort: { title : 1 }, limit: parseInt(req.query.limit), skip: parseInt(req.query.skip) })
//         res.send(course)
//     } catch(e) {
//         res.status(400).send(e)
//     }
// })

// router.get('/api/courses/:title', async (req, res) => {
//     try {
//         const course = await Course.findOne({ title: req.params.title })
//         if (!course) {
//             throw new Error()
//         }
//         res.send(course)
//     }   catch (e) {
//         res.status(404).send()
//     }
// })

router.get('/courses/avatar/:id', async (req, res) => {
    try {
        const course = await Course.findOne({ _id: req.params.id })
        if (!course) {
            throw new Error()
        }
        res.set('Content-Type', 'image/png')
        res.send(course.avatar)
    }   catch (e) {
        res.status(404).send()
    }
})


module.exports = router