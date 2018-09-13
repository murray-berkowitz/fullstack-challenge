import React from 'react'

const Periods = ({currentPeriod, league}) => {
    let progress = []
    if(league == "MLB" && currentPeriod <= 9) {
      currentPeriod = 9
    }
    else if(league == "NFL" && currentPeriod <= 4){
      currentPeriod = 4
    }
    for(let i = 1; i <= currentPeriod; i++) {
      progress.push(<span key={i}>{i}</span>)
    }
    return (
      <div className="boxscore__team__units">
       {progress}
      </div>
    )
  }
  
  const TeamResults = ({league}) => {
    if(league == "MLB") {
      return (
        <div className="boxscore__team__results">
          <span>R</span>
          <span>H</span>
          <span>E</span>
        </div>
      )
    }
    return (
      <div className="boxscore__team__results">
        <span>TOTAL</span>
      </div>
    )
  }
  
  const BoxscoreHeader = ({currentPeriod, league}) => {
    return (
      <div className="boxscore__team boxscore__team--header">
        <label />
        <Periods currentPeriod={currentPeriod} league={league} />
        <TeamResults league={league} />
      </div>
    )
  }

  export default BoxscoreHeader