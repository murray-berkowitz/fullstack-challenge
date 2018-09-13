import React from 'react'

/* Dynamically render the amount of periods/quarters/innings in a game. Eg baseball should always show a minimum of 9 innings,
but more potentially if it goes to extras. So we check our currentPeriod against the minimum number to display and determine how many to render.

This can all likely be abstracted further when keeping in mind other sports, OT, Penalty Shots, etc. Perhaps HOC scoreboard that will render
based on which league is passed in, thus ridding of all the "if 'mlb'" statements
*/
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
  
/*If league is baseball we know our total results columns will include runs hits and errors, otherwise only render TOTAL score.
I don't remember off top of head but probably a tennis scoreboard would render differently? As well as some other sports, so that
should be kept in mind as database grows w/ more game types and further along in dev
*/
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
/*
  Spits out our boxscore headers and exports it to be used in our Scoreboard component
*/
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