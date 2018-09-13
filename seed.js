const Game = require('./db/game')
const axios = require('axios')

//Map our axios requests so we can do all of em at once
let requests = ['https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/one', 'https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/two']
.map(e => axios.get(e))


let seed = () => {
    return axios.all(requests)
    .then(axios.spread((a, b) => {
        return Game.create(a.data.game, b.data) //Seed our db with data consumed by provided api
    }))
    .catch(err => console.error(JSON.stringify(err, 0, 2)))
}

module.exports = seed