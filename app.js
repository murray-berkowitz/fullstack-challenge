const express = require('express')
const app = express()
const mongoose = require('mongoose')

const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const connection = process.env.MONGODB_URI || `mongodb://localhost/scoreboard`

mongoose.connect(connection, { useNewUrlParser: true }, () => {
    mongoose.connection.db.dropDatabase()
})

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', require('./api'))

app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

module.exports = app