const mongoose = require('mongoose')
const gameSchema = require('./game')
const connection = process.env.MONGODB_URI || `mongodb://localhost/scoreboard`

mongoose.Promise = require('bluebird')

const Game = mongoose.model('Game', gameSchema)

const db = () => {
    return mongoose.connect(connection, { useNewUrlParser: true })
    .then(() => console.log('connected to db'))
    .catch(err => console.log('db connect error: ' + err))
}

module.exports = {
    db,
    models: {Game}
}