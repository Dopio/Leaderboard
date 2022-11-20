const express = require('express')

const app = express()

const PORT = 3000

app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})

app.get('/', (res, req) => {
  res.setEncoding('Hellow from serve')
})