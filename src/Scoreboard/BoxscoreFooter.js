import React from 'react'

/*
Configure game progress in the footer of our box score. We know if the games status is closed it should render FINAL regardless of sport
If the currentPeriodHalf variable isn't an empty string that likely means its a baseball game as no other sport has top/bottom of a qtr? I'm pretty 
sure at least haha. So we know if status isn't closed + half is defined then we can render status as Top _ or Btm _ .
Otherwise, if it's a traditional 4 quarter sport etc then just render the current period. 
*/
const GameStatus = ({currentPeriod, currentPeriodHalf, status}) => {
    let result
    if(status === "CLOSED") {
        result = "FINAL"
    }
    else if (currentPeriodHalf.length) {
        result = currentPeriodHalf === "A" ? `Top ${currentPeriod}` : `Btm ${currentPeriod}`
    }
    else {
        result = currentPeriod
    }
    return (
        <div className="boxscore__details__info">
            <strong>{result}</strong>
        </div>
    )
}

/*
Render team data, including team name and record (didn't see that data in our api :-[ ).  I'd also probably include a team logo somewhere
but couldn't find a good api that allowed me to fetch that either, since I think espns api is closed off from public registration now
*/

const BoxscoreTeamDetails = ({team,home}) => {
    const {name, abbr, teamColor, textColor} = team
    return (
        <div className={`boxscore__details__team boxscore__details__team--${home ? 'home' : 'away'}`} >
        <p>
            <strong>{name}</strong><small>{abbr}</small>
        </p>
        <span>56-38</span> {/*Info unavailable in provided feed*/}
        </div>
    )
}

//Render our footer and export to Scoreboard

const BoxscoreFooter = ({awayTeam, homeTeam, currentPeriod, status, currentPeriodHalf}) => {
    return (
      <div className="boxscore__details">
        <BoxscoreTeamDetails team={awayTeam} home={false}/>
        <GameStatus currentPeriodHalf={currentPeriodHalf} currentPeriod={currentPeriod} status={status} />
        <BoxscoreTeamDetails team={homeTeam} home={true}/>
      </div>
    )
}

export default BoxscoreFooter