# Tic Tac Toe

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Reflections](#reflections)
* [Author](#author)
* [Technologies](#technologies)

## Description

Do you often consider your own mortality, or perhaps listen to copious amounts of heavy metal? Do you also enjoy playing tic-tac-toe but think it might detract from your edginess? 
✖︎ vs 💀 is a new version of the classic tic-tac-toe game built just for folks like you! 

The goal for completing this project was to have a fully functioning tic-tac-toe game. The game should declare a winner, declare if there was a draw, show how many wins each player has and have a time-out at the end of each game to reset the board.

## Installation
1. Fork this repo
2. Clone down to your machine
3. Access cloned directory
4. Run "index.html"

## Walkthrough
This tic-tac-toe game can be played two different ways. You can click the cell you wish to play when it's your turn. Alternatively, use the tab key to move around the gameboard, hitting the space bar to select the cell with your token. Once a player acheives a win, all the cells are disabled, and the winner is declared. There is a 5 second hold before the game reloads and the winner's tally is updated. 

![screen capture of site](https://media.giphy.com/media/ohJuJ2wK243hBeTphM/giphy.gif)

If there isn't a winner for the game, it's declared a draw. Again, there is a 5 second hold before the game resets. 

![screen capture of site](https://media.giphy.com/media/ZQmbvdRylfb4AgRJMB/giphy.gif)

## Reflections
I found this project to be very challenging. Once I was able to figure out how my classes would interact with my main.js file it clicked into place. 


I wanted to make the game playable with the keyboard, so I opted to use inputs for HTML instead of divs, which made the styling somewhat more challenging. I also tried for a long time to try to figure out a way to get the winning boards to render on the page under each player, but wasn't able to solve it using the gameboard objects that I had built. 


I originally tried to incorporate my "it's a draw" logic a different way, but for some reason it would never fire despite my best efforts with return and break statements. I finally figured out a way to make it work, and I like the logic there. The evaluateBoard method in my game class is giant. I worked for a while trying to refactor it, but I wasn't able to come up with a good way to break it apart and keep the functionality. 



## Author

Sarah Fitzsimons <a href="https://github.com/sme93">GH


<img src="https://avatars.githubusercontent.com/u/74980483?s=400&u=666d5f139d0c221d8555a16e7f1b99069b6b9b0b&v=4" alt="S. Fitzsimons" width="125" height="auto" />

## Technologies

<table>
    <tr>
        <td>Functionality</td>
        <td>Structure</td>
        <td>Styling</td>
    </tr>
    </tr>
        <td><img src="./images/readme/js-icon.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="./images/readme/html-logo.png" alt="html" width="100" height="auto" /></td>
        <td><img src="./images/readme/css-logo.png" alt="css" width="100" height="auto" /></td>
    </tr>
</table>