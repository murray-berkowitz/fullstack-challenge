const server = require('./app')

const port = process.env.PORT || 2020

server.listen(port, () => {
    console.log(`Listening on port ${port}`)
})