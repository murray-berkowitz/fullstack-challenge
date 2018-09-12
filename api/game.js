const router = require('express').Router()
const Game = require('../db/game')

router.get('/', (req, res, next) => {
    Game.find()
    .then(data => {
        res.send(data)
    })
    .catch(next)
})

router.get('/:id', (req, res, next) => {
    Game.findById(req.params.id)
    .then(data => {
        res.send(data)
    })
    .catch(next)
})

module.exports = router