const server = require('./app')
const port = process.env.PORT || 2020
const seed = require('./seed')

seed()
.then(() => {
    server.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})