// Requiring the Modules

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const exec = require('child_process').exec

// Defining the app
const app = express()

// Defining the port
const port = process.env.PORT || 9000

// Defining the middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload())

// Defining Scan Route
app.post('/scan', (req, res) => {
  if (!req.files) {
    return res.status(400).send('Files not uploaded')
  } else {
    const uploadFile = req.files.uploadFile
    uploadFile.mv('./uploads/scan.txt', (err) => {
      if (err) {
        return res.status(500).send(err)
      } else {
        const child = exec('clamscan ./uploads/scan.txt', (error, stdout, stderr) => {
          const lines = stdout.toString().split('\n')[0].split(' ')[1]
          if (lines === 'OK') {
            res.send('No virus found')
          } else {
            res.send('Virus found')
          }
        })
      }
    })
  }
})

// Listening to port
app.listen(port)
console.log('Server Running on port:' + ' ' + 'http://localhost:' + port)
