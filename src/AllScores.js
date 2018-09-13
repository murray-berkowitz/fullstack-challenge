import React, {Component} from 'react'
import Scoreboard from './Scoreboard'
import axios from 'axios'

export default class AllStores extends Component {
  constructor(){
    super()
    this.state = {
      games: []
    }
  }
  componentDidMount(){
    axios.get('/api/game')
    .then(({data}) => {
      this.setState({
        games: data
      })
    })
  }
  render(){
    const {games} = this.state
    return (
      games.map(game => 
        <Scoreboard key={game._id} game={game} />
      )
    )
  }
}