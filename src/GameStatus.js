const GameStatus = ({currentPeriod, currentPeriodHalf, status}) => {
    if(status === "CLOSED") {
        return "FINAL"
    }
    else if (currentPeriodHalf.length) {
        return currentPeriodHalf === "A" ? `Top ${currentPeriod}` : `Btm ${currentPeriod}`
    }
    else {
        return currentPeriod
    }
}

export default GameStatus