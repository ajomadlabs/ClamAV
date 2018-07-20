// Requiring the Modules

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

// Defining the app
const app = express()

// Defining the port
const port = process.env.PORT || 9100

// Defining the middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())

require('./routes/index')(app)

// Listening to port
app.listen(port)
console.log('Server Running on port:' + ' ' + 'http://localhost:' + port)
