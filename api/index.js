const router = require('express').Router()

//Mount our game routes as middleware, prepending all requests with /game
router.use('/game', require('./game'))

module.exports = router