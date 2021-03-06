// renderPage() 
//handle move

var gameBoard = document.querySelector("#gameBoard");
var currentGameState = document.querySelector("#currentGameState");


gameBoard.addEventListener("click", handleTurn);
window.addEventListener("load", startGame);

function startGame() {
    renderWins();
    renderCurrentPlayersTurn();
}

function renderWins() {
   var playerOneWins = playerOne.retrieveWinsFromStorage();
   var playerTwoWins = playerTwo.retrieveWinsFromStorage();
   //get from storage, print to page
}

function renderCurrentPlayersTurn() {
    currentGameState.innerHTML = `${newGame.playersTurn}'s turn`
}

function handleTurn(event) {
    var target = parseInt(event.target.id);
 console.log("target ", target);
    newGame.toggleTurn();
 console.log("newGame ", newGame);
 renderCurrentPlayersTurn();
}

var playerOne = new Player("one", "emoji", []);
var playerTwo = new Player("two", "emoji2", []);

// console.log(playerOne);
// playerOne.saveWinsToStorage(['x', 'x', 'x', 'o', 'o', 'x', 'o', 'x', 'o']);
// playerTwo.saveWinsToStorage(['x', 'x', 'x', 'o', 'o', 'x', 'o', 'x', 'x']);
// playerOne.saveWinsToStorage([null, null, null, "o", "o", "o", null, "x", "x"]);
// playerTwo.saveWinsToStorage(["o", "o", "o", null, "x", null, "x", null, null]);

// console.log(playerOne.retrieveWinsFromStorage()); 

var newGame = new Game("x");
newGame.evaluateBoard();