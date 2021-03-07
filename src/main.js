var game;

var gameBoard = document.querySelector("#gameBoard");
var currentGameState = document.querySelector("#currentGameState");
var gameBoardInputs = document.querySelectorAll("input");
var playerOneWinningBoards = document.querySelector("#player1WinningBoards");
var playerTwoWinningBoards = document.querySelector("#player2WinningBoards");



gameBoard.addEventListener("click", handleTurn);
gameBoard.addEventListener("keydown", function(event){
    if (event.code === "Space") {
        handleTurn(event);
    }
});
window.addEventListener("load", startGame);

function startGame() {
    var playerOne = new Player("one", "emoji");
    var playerTwo = new Player("two", "emoji2");
    game = new Game(playerOne, playerTwo)
 
    renderWins();
    renderCurrentPlayersTurn();
}

function renderWins() {
   var playerOneWins = game.playerOne.retrieveWinsFromStorage();
   var playerTwoWins = game.playerTwo.retrieveWinsFromStorage();
//    var currentWin = playerOneWins[0];
//     var markup = "";
//     for (var i = 0; i < 5; i++) {
//         var currentCellValue = currentWin[i].playerId
//         markup += `<div data-cell-index=${currentCellValue} class="cell">${currentCellValue}</div>`
//     }
 
   
   playerOneWinningBoards.innerHTML = playerOneWins.length;
   playerTwoWinningBoards.innerHTML = playerTwoWins.length;
}

function resetGameBoard() {
    for (var input of gameBoardInputs) {
       input.disabled = false; 
       input.placeholder = "";
    }
    game.playersTurn = "x";
}

function renderCurrentPlayersTurn() {
    currentGameState.innerHTML = `${game.playersTurn}'s turn`
}

function handleTurn(event) {
    if (event.target.disabled) {
        return
    }
    var currentlySelectedBox = parseInt(event.target.id);
    game.gameBoard.push({
        arrayIndex: currentlySelectedBox,
        playerId: game.playersTurn,
    });
    event.target.disabled = true;
    event.target.placeholder = game.playersTurn;
    game.toggleTurn();
    game.evaluateBoard();
    if (game.gameBoard.length === 0) {
        resetGameBoard();
    }
    renderCurrentPlayersTurn();
}



