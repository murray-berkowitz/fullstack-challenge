import React from 'react'

/*
Can probably reuse this count check from the BoxscoreHeader component for rendering total amount of innings/quarters
Here we are just matching our game progress against the minimum game length. So for eg; if its only the 7th inning, we need to
render a "-" for the innings yet to be played. Same goes for quarters.  So that for loop only runs if the current game is less than 
minimum game length that a scoreboard would display
*/

const PeriodTally = ({teamDetails, league, currentPeriod, currentPeriodHalf, home, status}) => {
    let tally = teamDetails.map((period, index) => 
        <span key={period.number}>{(home && currentPeriodHalf === 'B' && status === "INPROGRESS" && index + 1 === currentPeriod) || (!home && currentPeriodHalf === 'A' && status === "INPROGRESS" && index + 1 === currentPeriod) ? '-' : period.runs}</span>  
    )
    let count
    if(league == "MLB") {
        count = tally.length > 9 ? currentPeriod : 9
    }
    else if(league === "NFL") {
        count = tally.length > 4 ? currentPeriod : 4
    }

    for(let i = tally.length + 1; i <= count; i++) {
        tally.push(<span key={i}>-</span>)
    }

    return (
        <div className="boxscore__team__units">
        {tally}
        </div>
    )
}

/*
  For our final tally, similar to in our Header: If baseball render the total runs hits and errors. Otherwise just return the total scored
*/
const FinalTally = ({teamFinal, teamDetails, league}) => {
    if(league == "MLB") {
        return (
        <div className="boxscore__team__results">
            <span>{teamFinal}</span>
            <span>{teamDetails.reduce((total,inning) => total + inning.hits, 0)}</span>
            <span>{teamDetails.reduce((total,inning) => total + inning.errors, 0)}</span> 
        </div>
        )
    }
    else {
        return (
        <div className="boxscore__team__results">
            <span>{teamFinal}</span>
        </div>
        )
    }
}

//Render the team stats and export to Scoreboard
const TeamTally = ({teamDetails, league, currentPeriod, currentPeriodHalf, teamFinal, team, home, status}) => {
    return (
        <div className={`boxscore__team boxscore__team--${home ? 'home' : 'away'}`}>
            <label>{team.abbr}</label>
            <PeriodTally teamDetails={teamDetails} league={league} currentPeriod={currentPeriod} currentPeriodHalf={currentPeriodHalf} home={home} status={status} />
            <FinalTally teamDetails={teamDetails} league={league} teamFinal={teamFinal} />
        </div>
    )
}

export default TeamTally

