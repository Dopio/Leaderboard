import express from 'express'
import jwt from 'jsonwebtoken' //Для авторизации
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import { validationResult } from 'express-validator'
import { registerValidation } from './src/server/validations/authValid.js'

import UserModel from './src/server/models/User.js'


const app = express() //создание сервера

app.use(express.json()) //Учим express читать Json

const PORT = 3000

const db = 'mongodb+srv://Stanislav:0q1IAErT557tnS82@cluster0.8oyv0xv.mongodb.net/leaderBoard?retryWrites=true&w=majority'

mongoose
  .connect(db, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err))


app.post('/auth/login', async (req, res) => { //Вход для администратора
  try {
    const user = await UserModel.findOne({ email: req.body.email })

    if (!user) {
      return res.status(404).json({
        messege: 'Не удалось авторизоваться'
      })
    }

    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

    if (!isValidPass) {
      return res.status(400).json({
        messege: 'Неверный логин или пароль'
      })
    }

    const token = jwt.sign(  //если у пользователя есть токен, то этого хватит для дальнейших действий и выдачи прав
      {
        _id: user._id
      },
      'someSecret239',
      {
        expiresIn: '10y' //токен даётся на 10 лет
      }
    )

    const { passwordHash, ...userData } = user._doc

    res.json({
      ...userData,
      token
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      messege: 'Не удалось авторизоваться'
    })
  }
})


app.post('/auth/register', registerValidation, async (req, res) => { //Регистрация администраторов
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }


    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt) //Шифрование пароля

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      passwordHash: hash
    })

    const user = await doc.save()

    const token = jwt.sign(  //если у пользователя есть токен, то этого хватит для дальнейших действий и выдачи прав
      {
        _id: user._id
      },
      'someSecret239',
      {
        expiresIn: '10y' //токен даётся на 10 лет
      }
    )

    const { passwordHash, ...userData } = user._doc

    res.json({
      ...userData,
      token
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      messege: 'Регистрация не удалась'
    })
  }
})


app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})