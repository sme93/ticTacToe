// renderPage() 
//handle move

var playerOne = new Player("one", "emoji", []);
var playerTwo = new Player("two", "emoji2", []);

console.log(playerOne);
playerOne.saveWinsToStorage(['x', 'x', 'x', 'o', 'o', 'x', 'o', 'x', 'o']);
playerTwo.saveWinsToStorage(['x', 'x', 'x', 'o', 'o', 'x', 'o', 'x', 'x']);
playerOne.saveWinsToStorage([null, null, null, "o", "o", "o", null, "x", "x"]);
playerTwo.saveWinsToStorage(["o", "o", "o", null, "x", null, "x", null, null]);

console.log(playerOne.retrieveWinsFromStorage()); 

var newGame = new Game();
newGame.evaluateBoard();