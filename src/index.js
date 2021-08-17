const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const activationRouter = require('./routers/activation')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', activationRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
  })