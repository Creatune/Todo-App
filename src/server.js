const express = require('express')
const app = express()
const path = require('path')

app.get('/', function(req, res) {
    res.send('')
})

app.use(express.static(__dirname + '../public'))

app.listen(3000, function() {
    console.log('todo list running on port 3000')
})