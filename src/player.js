class Player {
    constructor(id, token, wins) {
        this.id = id;
        this.token = token;
        this.wins = wins;
    }

    saveWinsToStorage(win) {
        var wins = `${this.id}-wins`
        this.wins.push(win);
        localStorage.setItem(wins, JSON.stringify(this.wins));
    }

    retrieveWinsFromStorage() {
        var wins = `${this.id}-wins`
        var retrievedWins = JSON.parse(localStorage.getItem(wins));
    }
}