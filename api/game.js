const router = require('express').Router()
const Game = require('../db/game')


//Find all games
router.get('/', (req, res, next) => {
    Game.find()
    .then(data => {
        res.send(data)
    })
    .catch(next)
})

//Find specifc game by id
router.get('/:id', (req, res, next) => {
    Game.findById(req.params.id)
    .then(data => {
        res.send(data)
    })
    .catch(next)
})

module.exports = router