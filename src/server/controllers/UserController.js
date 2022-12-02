import jwt from 'jsonwebtoken' //Для авторизации
import bcrypt from 'bcrypt'

import UserModel from '../models/User.js'


export const register = async (req, res) => { //Регистрация администраторов
  try {
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
      message: 'Регистрация не удалась'
    })
  }
}

export const login = async (req, res) => { //Вход для администратора
  try {
    const user = await UserModel.findOne({ email: req.body.email })

    if (!user) {
      return res.status(404).json({
        message: 'Не удалось авторизоваться'
      })
    }

    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

    if (!isValidPass) {
      return res.status(400).json({
        message: 'Неверный логин или пароль'
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
      message: 'Не удалось авторизоваться'
    })
  }
}

export const getMe = async (req, res) => { //Получение данных о себе
  try {
    const user = await UserModel.findById(req.userId)
    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден'
      })
    }

    const { passwordHash, ...userData } = user._doc

    res.json(userData)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Нет доступа'
    })
  }
}