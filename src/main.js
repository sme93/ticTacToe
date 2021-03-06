// renderPage() 
//handle move

var gameBoard = document.querySelector("#gameBoard");
var currentGameState = document.querySelector("#currentGameState");


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
   //get from storage, print to page
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
    game.evaluateBoard();
    event.target.disabled = true;
    event.target.placeholder = game.playersTurn;
    game.toggleTurn();
    renderCurrentPlayersTurn();
    //console.log(event.target.id);
 //console.log("event ", event.target.disabled);
 //console.log("target ", target);
 //console.log("game ", game);
}

// console.log(playerOne);
// playerOne.saveWinsToStorage(['x', 'x', 'x', 'o', 'o', 'x', 'o', 'x', 'o']);
// playerTwo.saveWinsToStorage(['x', 'x', 'x', 'o', 'o', 'x', 'o', 'x', 'x']);
// playerOne.saveWinsToStorage([null, null, null, "o", "o", "o", null, "x", "x"]);
// playerTwo.saveWinsToStorage(["o", "o", "o", null, "x", null, "x", null, null]);

// console.log(playerOne.retrieveWinsFromStorage()); 

var game;
//game.evaluateBoard();
var newObject = {
    arrayIndex: 1,
    playerId: "x"
}

var emptyObject = {
    arrayIndex: 7,
    playerId: null,
}

var someArray = [newObject, emptyObject]
