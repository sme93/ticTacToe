class Game {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.gameBoard = [];
        this.playersTurn = "x";
    }
    evaluateBoard() {
        if (this.gameBoard.length < 5) {
            return;
        }

        var winningBoards = [
            "0,1,2",
            "3,4,5", 
            "6,7,8", 
            "0,3,6", 
            "1,4,7", 
            "2,5,8", 
            "0,4,8", 
            "2,4,6"
        ];
        var playerOneMoves = [];
        var playerTwoMoves = [];
        for (var i = 0; i < this.gameBoard.length; i++) {
            if (this.gameBoard[i].playerId === "x") {
                playerOneMoves.push(this.gameBoard[i].arrayIndex);
            } else {
                playerTwoMoves.push(this.gameBoard[i].arrayIndex);
            }
        } 
        function compareNumbers(a, b) {
            return a - b;
        }
        playerOneMoves.sort(compareNumbers);
        playerTwoMoves.sort(compareNumbers);
        var playerOneMovesAsString = playerOneMoves.toString();
        var playerTwoMovesAsString = playerTwoMoves.toString();

        for (var i = 0; i < winningBoards.length; i++) {
            if (playerOneMovesAsString.includes(winningBoards[i])) {
               this.saveWinToPlayer("player one");
            }
            if (playerTwoMovesAsString.includes(winningBoards[i])) {
                this.saveWinToPlayer("player two");
            }
        } 
    }

    toggleTurn() {
        if (this.playersTurn === "x") {
            this.playersTurn = "o";
        } else {
            this.playersTurn = "x";
        } 
    }

    saveWinToPlayer(winningPlayer) {
        if (winningPlayer === "player one") {
            console.log("player one");
            this.playerOne.saveWinsToStorage();
            this.resetBoard();
        } else {
            this.playerTwo.saveWinsToStorage();
            console.log("player two");
            this.resetBoard();
        }
    }

    resetBoard() {
        this.gameBoard = [];
        console.log("reset board");
    }
}



// A Game should include:
// Two Player instances x
// A way to keep track of the data for the game board x
// A way to keep track of which player’s turn it currently is x
// A way to check the Game’s board data for win conditions x
// A way to detect when a game is a draw(no one has won) x
// A way to save a winning Game’s board data to the correct player’s wins array x
// A way to reset the Game’s board to begin a new game x
