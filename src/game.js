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
            [0,1,2],
            [3,4,5], 
            [6,7,8], 
            [0,3,6], 
            [1,4,7], 
            [2,5,8], 
            [0,4,8], 
            [2,4,6]
        ];

        var currentPlayersMoves = [];
        for (var i = 0; i < this.gameBoard.length; i++) {
            if (this.gameBoard[i].playerId === this.playersTurn) {
                currentPlayersMoves.push(this.gameBoard[i].arrayIndex)
            }
        } 
    
        var isDraw = true;
        function checkGameboard(winningBoard) {
            return currentPlayersMoves.includes(winningBoard);
        }

        for (var i = 0; i < winningBoards.length; i++) {
             if (winningBoards[i].every(checkGameboard)) {
                 this.saveWinToPlayer(this.playersTurn);
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
        if (winningPlayer === "one") {
            this.playerOne.saveWinsToStorage(this.gameBoard);
        } else {
            this.playerTwo.saveWinsToStorage(this.gameBoard);
        }
        this.resetBoard();
    }

    resetBoard() {
      this.gameBoard = [];
    }
}

