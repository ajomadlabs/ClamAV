const exec = require('child_process').exec

module.exports = (app) => {
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
          exec('clamscan ./uploads/scan.txt', (error, stdout, stderr) => {
            const lines = stdout.toString().split('\n')[0].split(' ')[1]
            if (lines === 'OK') {
              res.send('No virus found')
            } else {
              res.send('Virus found')
              error = null
            }
          })
        }
      })
    }
  })
}
