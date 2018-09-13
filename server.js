const server = require('./app')
const port = process.env.PORT || 2020
const seed = require('./seed')
//Start our app by seeding db then connecting to server
seed()
.then(() => {
    server.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})