const server = require('./app')
const port = process.env.PORT || 2020
const {db} = require('./db')
const seed = require('./seed')
const mongoose = require('mongoose')

db()
.then(() => mongoose.connection.db.dropDatabase())
.then(() => seed())
.then(() => {
    server.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})
.then(() => {
    process.on('SIGINT', () => {
        mongoose.connection.close(() => console.log('closed db connection'))
        process.exit(0)
    })
})