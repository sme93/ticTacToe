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
    var playerOne = new Player("one", "0x2716");
    var playerTwo = new Player("two", "0x1F480");
    game = new Game(playerOne, playerTwo)
 
    renderWins();
    renderCurrentPlayersTurn();
}

function renderWins() {
   var playerOneWins = game.playerOne.retrieveWinsFromStorage();
   var playerTwoWins = game.playerTwo.retrieveWinsFromStorage();

   playerOneWinningBoards.innerHTML = playerOneWins.length;
   playerTwoWinningBoards.innerHTML = playerTwoWins.length;
}

function renderWinner() {
    if (game.playersTurn === "one") {
        currentGameState.innerHTML = `${String.fromCodePoint(game.playerTwo.token)} wins`;
    } 
    if (game.playersTurn === "two") {
        currentGameState.innerHTML = `${String.fromCodePoint(game.playerOne.token)} wins`;
    }
    if (game.playersTurn === "draw") {
        currentGameState.innerHTML = `It's a Draw!`;
    }

    for (var input of gameBoardInputs) {
        input.disabled = true;
    }
}

function resetGameBoard() {
    renderWinner();
    
    setTimeout(function () {
        for (var input of gameBoardInputs) {
            input.disabled = false;
            input.value = "";
        }
        game.playersTurn = game.playerOne.id;
        renderWins();
        renderCurrentPlayersTurn();
    }, 5000);
}   

function renderCurrentPlayersTurn() {
    currentGameState.innerHTML = `${String.fromCodePoint(getCurrentPlayersToken())}'s turn`;
}

function getCurrentPlayersToken() {
    var playersTurnToken = "";
    if (game.playersTurn === "one") {
        playersTurnToken = game.playerOne.token;
    } else {
        playersTurnToken = game.playerTwo.token;
    }

    return playersTurnToken;
}

function saveMove(event) {
    var currentlySelectedBox = parseInt(event.target.id);
    game.gameBoard.push({
        arrayIndex: currentlySelectedBox,
        playerId: game.playersTurn,
    });
    event.target.disabled = true;
    event.target.value = String.fromCodePoint(getCurrentPlayersToken());
}

function handleTurn(event) {
    if (event.target.disabled) {
        return;
    }

    saveMove(event);
    game.toggleTurn();
    game.evaluateBoard();
    if (game.gameBoard.length === 0) {
        resetGameBoard();
    } else {
        renderCurrentPlayersTurn();
    }
}
