import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { registerValidation } from './src/server/validations/authValid.js'
import { loginValidation } from './src/server/validations/loginValid.js'

import checkAuth from './src/server/utils/checkAuth.js'
import * as UserController from './src/server/controllers/UserController.js'
import handleValidationErrors from './src/server/utils/handleValidationErrors.js'


const app = express() //создание сервера

app.use(express.json()) //Учим express читать Json
app.use(cors())

const PORT = 5555

const db = 'mongodb+srv://Stanislav:0q1IAErT557tnS82@cluster0.8oyv0xv.mongodb.net/leaderBoard?retryWrites=true&w=majority'

mongoose
  .connect(db, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err))


app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.get('/auth/me', checkAuth, UserController.getMe)

app.post('data/competitive')


app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})