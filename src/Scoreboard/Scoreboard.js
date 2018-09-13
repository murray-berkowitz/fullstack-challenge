import React from 'react'
import BoxscoreHeader from './BoxscoreHeader'
import TeamTally from './TeamTally'
import BoxscoreFooter from './BoxscoreFooter'

//Our scoreboard component does not need to be a smart component, so instead it is all presentational and gets its data via props instead

const Scoreboard = ({game}) => {
  const {awayTeamDetails, homeTeamDetails, awayTeamFinal, homeTeamFinal, currentPeriod, currentPeriodHalf, status, league, awayTeam, homeTeam} = game
  return (
    <div className="boxscore">
        <BoxscoreHeader currentPeriod={currentPeriod} league={league.alias} />
        <TeamTally team={awayTeam} teamDetails={awayTeamDetails} teamFinal={awayTeamFinal} league={league.alias} currentPeriod={currentPeriod} currentPeriodHalf={currentPeriodHalf} home={false} status={status}/>
        <TeamTally team={homeTeam} teamDetails={homeTeamDetails} teamFinal={homeTeamFinal} league={league.alias} currentPeriod={currentPeriod} currentPeriodHalf={currentPeriodHalf} home={true} status={status}/>
        <BoxscoreFooter awayTeam={awayTeam} homeTeam={homeTeam} currentPeriod={currentPeriod} currentPeriodHalf={currentPeriodHalf} status={status} />
    </div>
  )
}

export default Scoreboard