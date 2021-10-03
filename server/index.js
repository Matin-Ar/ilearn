const express = require('express')
const path = require('path')
require('./db/mongoose')
const userRouter = require('./routers/user')
const activationRouter = require('./routers/activation')
const courseRouter = require('./routers/course')
const lessonRouter = require('./routers/lesson')

const app = express()
const port = process.env.PORT

app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', activationRouter)
app.use('/api', courseRouter)
app.use('/api', lessonRouter)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
  })