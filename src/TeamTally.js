import React from 'react'

const PeriodTally = ({teamDetails, league, currentPeriod}) => {
    let tally = teamDetails.map(period => 
        <span key={period.number}>{period.runs}</span>  
    )
    if(league == "MLB") {
        let count = tally.length > 9 ? currentPeriod : 9
        for(let i = tally.length + 1; i <= count; i++) {
        tally.push(<span key={i}>-</span>)
        }
    }
    return (
        <div className="boxscore__team__units">
        {tally}
        </div>
    )
}

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

const TeamTally = ({teamDetails, league, currentPeriod, teamFinal, team, home}) => {
    return (
        <div className={`boxscore__team boxscore__team--${home ? 'home' : 'away'}`}>
            <label>{team.abbr}</label>
            <PeriodTally teamDetails={teamDetails} league={league} currentPeriod={currentPeriod} />
            <FinalTally teamDetails={teamDetails} league={league} teamFinal={teamFinal} />
        </div>
    )
}

export default TeamTally

