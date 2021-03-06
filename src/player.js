class Player {
    constructor(id, token, wins) {
        this.id = id;
        this.token = token;
        this.wins = wins;
    }

    saveWinsToStorage(win) {
        var wins = `${this.id}-wins`
        this.wins.push(win);
        //var temp = [x, x, x, o, o, x, o, x, o];
        //var temp2 = [null, null, null, o, o, o, null, x, x];
        localStorage.setItem(wins, JSON.stringify(this.wins));
    }

    retrieveWinsFromStorage() {
        var wins = `${this.id}-wins`
        var retrievedWins = JSON.parse(localStorage.getItem("wins"));
    }
}