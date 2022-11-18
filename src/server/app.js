/* const Logger = require('./log') //Импортирование подкласса Logger
const logger = new Logger()

logger.on('some_event', (args) => {
  const { id, text } = args
    console.log(id, text)
})

logger.log('User Logged!') */


/* const html = require('../../public/index.html') */

/* res.setHeader('Content-Type', 'application/json')
res.write('<h1>Hi all</h1>')

const data = JSON.stringify([
  {name: 'Timmy', age: 7},
  {name: 'Kolya', age: 12},
]) */



const http = require('http')
const fs = require('fs')


const PORT = 3000

const server = http.createServer((req, res) => {
  console.log('Server request')
  console.log(req.url, req.method)

  res.setHeader('Content-Type', 'text/html')

  if (req.url = '/') {
    fs.readFile('./public/index.html', (err, data) => {
      if (err) {
        console.log(err)
        res.end()
      }
      else {
        res.write(data)
        res.end()
      }
    })
  }

  /* res.end() */
})

server.listen(PORT, 'localhost', (error)=>{
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})