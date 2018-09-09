const router = require('express').Router()
const mongoose = require('mongoose')
const {Game} = require('../db').models
console.log(mongoose.connection)
router.get('/:id', (req, res, next) => {
    Game.find({_id:req.params.id}).select('_id')
    .then(data => res.send(data))
    .catch(next)
})

module.exports = router