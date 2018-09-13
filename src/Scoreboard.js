import React from 'react'
import BoxscoreHeader from './BoxscoreHeader'
import TeamTally from './TeamTally'
import GameStatus from './GameStatus'

const Scoreboard = ({game}) => {
  const {awayTeamDetails, homeTeamDetails, awayTeamFinal, homeTeamFinal, currentPeriod, currentPeriodHalf, status, league, awayTeam, homeTeam} = game
  return (
    <div className="boxscore">
        <BoxscoreHeader currentPeriod={currentPeriod} league={league.alias} />
        <TeamTally team={awayTeam} teamDetails={awayTeamDetails} teamFinal={awayTeamFinal} league={league.alias} currentPeriod={currentPeriod} home={false} />
        <TeamTally team={homeTeam} teamDetails={awayTeamDetails} teamFinal={homeTeamFinal} league={league.alias} currentPeriod={currentPeriod} home={true} />
        <div className="boxscore__details">
          <div className="boxscore__details__team boxscore__details__team--away">
            <p>
              <strong>{awayTeam.name}</strong><small>{awayTeam.abbr}</small>
            </p>
            <span>56-38</span> {/*Info unavailable in provided feed*/}
          </div>
          <div className="boxscore__details__info">
            <strong><GameStatus currentPeriod={currentPeriod} status={status} currentPeriodHalf={currentPeriodHalf} /></strong>
          </div>
          <div className="boxscore__details__team boxscore__details__team--home">
            <p>
              <strong>{homeTeam.name}</strong><small>{homeTeam.abbr}</small>
            </p>
            <span>56-38</span> {/*Info unavailable in provided feed*/}
          </div>
        </div>
      </div>
  )
}

export default Scoreboard