//is valid login ?
const User = require('../models/user')

const login = async (req, res, next) => {
    try {
        if(!req.body.number) {
            throw new Error('Provide number !')
        }
        const number = await User.findOne({ number: req.body.number })
        if (!number) {
            throw new Error('این شماره ثبت نشده است !')
        }
        
        next()
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
}

module.exports = login