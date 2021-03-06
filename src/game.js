class Game {
    constructor(playersTurn) {
        this.playerOne
        this.playerTwo
        this.gameBoard = [];
        this.playersTurn = playersTurn;
    }
    evaluateBoard() {

        var winningBoards = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], 
        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

        for (var i = 0; i < this.gameBoard.length; i++) {
            console.log("hello");
            // if ( all three in row the same ) {
            //     winner
            // }
            // if ( all three in a column the same ) {
            //     winner
            // }
            // if ( diagonal 1/5/9 ) {
            //     winner
            // }
            // if ( diagonal 3/5/7 ) {
            //     winner
            // }
            // if ( none of those && gameboard full ) {
            //     draw
            // }
        } 
       
       // if win - call playerone.saveswinstostorage()
    }

    toggleTurn() {
        if (this.playersTurn === "x") {
            this.playersTurn = "o";
        } else {
            this.playersTurn = "x";
        } 
        console.log(this.playersTurn);
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
