class Game {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.gameBoard = [];
        this.playersTurn = "one";
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
            if (this.gameBoard[i].playerId === "one") {
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
        var isDraw = true;
        for (var i = 0; i < winningBoards.length; i++) {
            if (playerOneMovesAsString.includes(winningBoards[i])) {
               this.saveWinToPlayer("player one");
               isDraw = false;
            }
            if (playerTwoMovesAsString.includes(winningBoards[i])) {
                this.saveWinToPlayer("player two");
                isDraw = false;
            }
        }   
        if (this.gameBoard.length === 9 && isDraw) {
            this.resetBoard();
            this.playersTurn = "draw";
        }
    }


    toggleTurn() {
        if (this.playersTurn === "one") {
            this.playersTurn = "two";
        } else {
            this.playersTurn = "one";
        } 
    }

    saveWinToPlayer(winningPlayer) {
        function compareMoves(a, b) {
            return a.arrayIndex - b.arrayIndex;
        }
        this.gameBoard.sort(compareMoves)
        if (winningPlayer === "player one") {
            this.playerOne.saveWinsToStorage(this.gameBoard);
            this.resetBoard();
        } else {
            this.playerTwo.saveWinsToStorage(this.gameBoard);
            this.resetBoard();
        }
    }

    resetBoard() {
      this.gameBoard = [];
    }
}

