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
   console.log(playerOneWins[0]);
    var markup = "";

   markup += `
   <div class="game-board>
    <div data-cell-index="0" class="cell"></div>
    <div data-cell-index="1" class="cell"></div>
    <div data-cell-index="2" class="cell"></div>
    <div data-cell-index="3" class="cell"></div>
    <div data-cell-index="4" class="cell"></div>
    <div data-cell-index="5" class="cell"></div>
    <div data-cell-index="6" class="cell"></div>
    <div data-cell-index="7" class="cell"></div>
    <div data-cell-index="8" class="cell"></div>
   </div>`
   
   playerOneWinningBoards.innerHTML = markup;
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



