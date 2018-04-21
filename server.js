const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/haiku', function (req, res) {
  if (req.query.message) {
    res.send('Thank you for the haiku:\n' + req.query.message)
  } else {
    res.redirect('/')
  }
})

app.post('/haiku', function (req, res) {
  res.redirect('/haiku?message=' + req.body.haiku);
})

app.listen(3001)