const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const moment = require('moment')

const router = new express.Router()

router.post('/users/signup', async (req, res) => {
    try{
        if(!req.body.number) {
            throw new Error("Provide number !")
        }
        await User.verify(req.body.number, req.body.code)
        const user = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            number: req.body.number
        })
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send({ error: e.message})
    }
})

router.post('/users/login', async (req, res) => {
    try {
        if(!req.body.number || !req.body.code) {
            throw new Error("Provide number and your code !")
        }
        await User.verify(req.body.number, req.body.code)
        const user = await User.findOne({ number: req.body.number })
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send({ error: e.message})
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

//temp**
router.delete('/users/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        await user.delete()
        res.send({ message: 'Deleted !'})
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/activity', auth, async (req, res) => {
    try {
        req.user.activity = req.user.activity.concat({
            date: moment().format(),
            count: req.body.count
        })
        await req.user.save()
        res.send(req.user.activity)
    } catch (e) {
        res.status(500).send()
    }
})
//temp**

router.get('/users/allusers', auth, async (req, res) => {
    try {
         const user = await User.find({ }, [ "name", "lastname", "number" ,"role", "createdAt" ], { sort: { title : 1 }, limit: parseInt(req.query.limit), skip: parseInt(req.query.skip) })
         res.status(200).send(user)
} catch(e) {
        res.status(400).send(e)
    }
})



module.exports = router