// Requiring the Modules

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// Defining the app

const app = express()

// Defining the port

const port = process.env.PORT || 9000

// Defining the middlewares

app.use(morgan('dev'))
app.use(bodyParser({uploadDir: './uploads'}))
app.use(cors())

// Listening to port

app.listen(port)
console.log('Server Running on port:' + ' ' + 'http://localhost:' + port)
