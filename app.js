const express = require('express')
const app = express()
const mongoose = require('mongoose')

const path = require('path')
const morgan = require('morgan') //request logging middleware
const bodyParser = require('body-parser') //attaches body object to our requests

const connection = process.env.MONGODB_URI || `mongodb://localhost/scoreboard` //sets up our connection for heroku deployment or local env

mongoose.connect(connection, { useNewUrlParser: true }, () => {
    mongoose.connection.db.dropDatabase() //drop db in dev since we are seeding our db 
})

app.use('/public', express.static(path.join(__dirname, 'public'))) //prepend all requests to our static public directory with /public 
app.use('/dist', express.static(path.join(__dirname, 'dist'))) //...same but for dist

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', require('./api')) //mounts our api for all requests prepended with /api

//load our app via index.html for all requests, typically React will be responsible for our routing between pages/components
app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

module.exports = app