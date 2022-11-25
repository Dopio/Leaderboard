const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.set('view engine', 'ejs')

const PORT = 3000
const db = 'mongodb+srv://Stanislav:0q1IAErT557tnS82@cluster0.8oyv0xv.mongodb.net/leaderBoard?retryWrites=true&w=majority'

mongoose
  .connect(db, {useNewUrlParser: true}, {useUnifiedTopology: true})
  .then((res) => console.log('Connected to DB'))
  .catch((err) => console.log(err))

app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.get('/', (res, req) => {
  res.setEncoding('Hellow from serve')
})