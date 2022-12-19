import express from 'express'
import cors from 'cors'
import initDb from './db.js'
import competitiveController from './controllers/competitive.js'
import studentController from './controllers/student.js'
import userController from './controllers/user.js'

const app = express() // создание сервера

app.use(express.json()) // Учим express читать Json
app.use(cors())

const PORT = 5555

const db = await initDb()

competitiveController(app, db)
studentController(app, db)
userController(app, db)

app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})
