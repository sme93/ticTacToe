class Game {
    constructor() {
        this.playerOne
        this.playerTwo
        this.gameBoard = [];
        this.playersTurn 
    }
    evaluateBoard() {
        //win/lose/draw ?
        //if win - call playerone.saveswinstostorage()
    }

    toggleTurn() {
        //?
    }

    saveWinToPlayer() {
        //?
    }

    resetBoard() {
        //change this.gameBoard to 9 nulls
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
