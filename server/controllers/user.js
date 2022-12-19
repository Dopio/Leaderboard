import { Op } from 'sequelize'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const registrate = (db) => async (req, res) => {
  const body = req.body
  const password = body.password
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await db.User.create({ fullName: body.fullName, email: body.email, password: hash })

  res.json({ email: user.email, fullName: user.fullName, id: user.id })
}

const login = (db) => async (req, res) => {
  const body = req.body

  const users = await db.User.findAll({
    where: {
      email: {
        [Op.eq]: body.email
      }
    }
  })

  const user = users[0]

  console.log(user)

  if (!user) {
    return res.status(400).json({
      message: 'Не удалось авторизоваться'
    })
  }

  const isValidPassword = await bcrypt.compare(body.password, user.password)

  if (!isValidPassword) {
    return res.status(400).json({
      message: 'Неверный логин или пароль'
    })
  }

  const token = jwt.sign({
    id: user.id,
    email: user.email,
    fullName: user.fullName
  },
  'someSecret239',
  {
    expiresIn: '10y'
  }
  )

  res.json({
    token
  })
}

const getAll = (db) => async (_, res) => {
  const users = await db.User.findAll()

  res.json(users)
}

const getOne = (db) => async (req, res) => {
  const userId = req.params.id
  const user = await db.User.findAll({
    where: {
      id: {
        [Op.eq]: userId
      }
    }
  })

  res.json(user)
}

const remove = (db) => async (req, res) => {
  const userId = req.params.id
  const user = await db.User.destroy({
    where: {
      id: {
        [Op.eq]: userId
      }
    }
  })

  res.json(user)
}

const update = (db) => async (req, res) => {
  const userId = req.params.id
  const user = await db.User.update(req.body, {
    where: {
      id: {
        [Op.eq]: userId
      }
    }
  })

  res.json(user)
}

export default (app, db) => {
  app.post('/user', registrate(db))
  app.post('/user/login', login(db))
  app.get('/user', getAll(db))
  app.get('/user/:id', getOne(db))
  app.delete('/user/:id', remove(db))
  app.put('/user/:id', update(db))
}
