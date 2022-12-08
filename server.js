import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { registerValidation } from './src/server/validations/authValid.js'
import { loginValidation } from './src/server/validations/loginValid.js'
import { competitiveValidation } from './src/server/validations/competitiveValid.js'

import checkAuth from './src/server/utils/checkAuth.js'
import * as UserController from './src/server/controllers/UserController.js'
import * as CompetitiveController from './src/server/controllers/CompetitiveController.js'
import * as StudentController from './src/server/controllers/StudentController.js'
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

//Администратор
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.get('/auth/me', checkAuth, UserController.getMe)

//Соревнования
app.get('/competitive/:id', CompetitiveController.getOne)
app.get('/competitive', CompetitiveController.getAll)
app.post('/competitive', checkAuth, competitiveValidation, CompetitiveController.create)
app.delete('/competitive/:id', checkAuth, CompetitiveController.remove)
app.patch('/competitive/:id', checkAuth, competitiveValidation, CompetitiveController.update)

//Ученик
app.get('/competitive/:id/student', StudentController.getAll)
app.post('/competitive/:id/student', checkAuth, StudentController.create)
/* app.delete('/competitive/:id/student/:id', checkAuth, StudentController.remove)
app.patch('/competitive/:id/student/:id', checkAuth, StudentController.update) */


app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})