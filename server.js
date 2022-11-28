const express = require('express')
const jwt = require('jsonwebtoken') //Для авторизации
const mongoose = require('mongoose')

const app = express() //создание сервера

app.use(express.json())

app.set('view engine', 'ejs')

const PORT = 3000
const db = 'mongodb+srv://Stanislav:0q1IAErT557tnS82@cluster0.8oyv0xv.mongodb.net/leaderBoard?retryWrites=true&w=majority'

app.get('/', (res, req) => {
  res.setEncoding('Hellow from servefsdfr')
})

app.post('/auth', (req, res)=>{
  console.log(req.body)

  const token = jwt.sign({
    email: req.body.email,
  }, 'someHash')

  res.json({
    success: true,
    token
  })
})

mongoose
  .connect(db, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err))

app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})