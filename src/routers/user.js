const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/users/signup', async (req, res) => {
    try{

        if(!req.body.number) {
            throw new Error("Provide number !")
        }
        await User.verify(req.body.number, req.body.code)
        const user = new User(req.body)
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
//temp**

module.exports = router