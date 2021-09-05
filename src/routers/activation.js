const express = require('express')
const Activation = require('../models/activation')
const sendsms = require('../APIs/sms')
const signup = require('../middleware/signup')
const login = require('../middleware/login')
const router = new express.Router()

router.post('/activation/sendcode', signup, async (req, res) => {
    try {
        const randomCode = (Math.floor(Math.random() * 9000 + 1000)).toString()
        const user = await Activation.findOne({ number: req.body.number })
        if (!user) {
            const user = new Activation({
                number: req.body.number,
                code: randomCode
            })
            await user.save()
        } else {
            user.code = randomCode
            await user.save()
        }
        await sendsms.sendsms1(req.body.number, randomCode)
        res.send({ message: "کد ارسال شد !" })
    } catch(e) {
        res.status(400).send({ error: e.message })
    }
})

router.post('/verification/sendcode', login, async (req, res) => {
    try {
        const randomCode = (Math.floor(Math.random() * 9000 + 1000)).toString()
        const user = await Activation.findOne({ number: req.body.number })
        if (!user) {
            const user = new Activation({
                number: req.body.number,
                code: randomCode
            })
            await user.save()
        } else {
            user.code = randomCode
            await user.save()
        }
        await sendsms.sendsms2(req.body.number, randomCode)
        res.send({ message: "کد ارسال شد !" })
    } catch(e) {
        res.status(400).send({ error: e.message })
    }
})

module.exports = router