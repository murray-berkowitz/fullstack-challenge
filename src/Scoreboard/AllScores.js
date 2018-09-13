import React, {Component} from 'react'
import Scoreboard from './Scoreboard'
import axios from 'axios'

//Render scoreboards for each game in our DB

//In prod we'd likely want this view to be rendered to show all scoreboards for a specific league/date etc

/* I wonder if it makes more sense to pass in a scoreboard config object instead of the entire game object as its props?
This way our props are cleaned up in our Scoreboard.js and we can maybe pass in different configs for different sports, or different
sized scoreboards *think espn header*
*/
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