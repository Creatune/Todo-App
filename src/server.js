const express = require('express')
const app = express()
const path = require('path')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(3000, function() {
    console.log('Shopping list running on port 3000')
})