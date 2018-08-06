const exec = require('child_process').exec
const file = require('../config/config')
const fs = require('fs')

module.exports = (app) => {
  // Defining Scan Route
  app.post('/scan', (req, res) => {
    if (!req.files) {
      return res.status(400).send('Files not uploaded')
    } else {
      const uploadFile = req.files.uploadFile
      uploadFile.mv(file.file, (err) => {
        if (err) {
          return res.status(500).send(err)
        } else {
          exec('clamscan' + ' ' + file.file, (error, stdout, stderr) => {
            const lines = stdout.toString().split('\n')[0].split(' ')[1]
            const virus = stdout.toString().split('\n')[7].split(' ')[2]
            if (lines === 'OK' && virus === 0) {
              res.send('No virus found')
            } else if (virus > 0) {
              error = null
              res.send('Virus found')
            }
          })
        }
      })
    }
  })
}
