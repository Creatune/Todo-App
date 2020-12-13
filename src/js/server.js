const express = require('express')
const app = express()
const path = require('path')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '../../index.html'))
})

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + '../../css/style.css')
})

app.listen(3000, function() {
    console.log('todo list running on port 3000')
})