// code your solution here
function superbowlWin() {
    const winningGame = array.find(game => game.result === '2015');
    return winningGame.year;
}
superbowlWin = (record) => {
    if (record.result === 'W') {
        return record.year
    }
}
