var game;

var gameBoard = document.querySelector("#gameBoard");
var currentGameState = document.querySelector("#currentGameState");
var gameBoardInputs = document.querySelectorAll("input");



gameBoard.addEventListener("click", handleTurn);
gameBoard.addEventListener("keydown", function(event){
    if (event.code === "Space") {
        handleTurn(event);
    }
});
window.addEventListener("load", startGame);

function startGame() {
    var playerOne = new Player("one", "emoji", []);
    var playerTwo = new Player("two", "emoji2", []);
    game = new Game(playerOne, playerTwo)
 
    renderWins();
    renderCurrentPlayersTurn();
}

function renderWins() {
   var playerOneWins = game.playerOne.retrieveWinsFromStorage();
   var playerTwoWins = game.playerTwo.retrieveWinsFromStorage();
   console.log(playerOneWins);
   console.log(playerTwoWins);
   //get from storage, print to page
}

function clearGameBoard() {
    for (var input of gameBoardInputs) {
       input.disabled = false; 
       input.placeholder = "";
    }
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
    game.evaluateBoard();
    if (game.gameBoard.length === 0) {
        clearGameBoard();
    }
    game.toggleTurn();
    renderCurrentPlayersTurn();
}



