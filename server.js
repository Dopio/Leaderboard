import express from 'express'
import mongoose from 'mongoose'

import { registerValidation } from './src/server/validations/authValid.js'

import checkAuth from './src/server/utils/checkAuth.js'
import * as UserController from './src/server/controllers/UserController.js'


const app = express() //создание сервера

app.use(express.json()) //Учим express читать Json

const PORT = 3000

const db = 'mongodb+srv://Stanislav:0q1IAErT557tnS82@cluster0.8oyv0xv.mongodb.net/leaderBoard?retryWrites=true&w=majority'

mongoose
  .connect(db, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err))


app.post('/auth/register', registerValidation, UserController.register)
app.post('/auth/login', UserController.login)
app.get('/auth/me', checkAuth, UserController.getMe)


app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})