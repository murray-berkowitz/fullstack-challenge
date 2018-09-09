const {Game} = require('./db').models
const axios = require('axios')

let requests = ['https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/one', 'https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/two']
.map(e => axios.get(e))

let seed = () => {
    return axios.all(requests)
    .then(axios.spread((a, b) => {
        return Game.create(a.data.game, b.data)
    }))
    .catch(err => console.error(JSON.stringify(err, 0, 2)))
}

module.exports = seed