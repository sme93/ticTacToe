class Player {
    constructor(id, token) {
        this.id = id;
        this.token = token;
        this.wins = [];
    }

    saveWinsToStorage(winningBoard) {
        var playersWins = `${this.id}-wins`
        var retrievedWins = JSON.parse(localStorage.getItem(playersWins));
        if (!retrievedWins) {
            this.wins.push(winningBoard);
        } else {
            retrievedWins.push(winningBoard);
            this.wins = retrievedWins;
        }
        localStorage.setItem(playersWins, JSON.stringify(this.wins));
    }

    retrieveWinsFromStorage() {
        
        var playersWins = `${this.id}-wins`
        var retrievedWins = JSON.parse(localStorage.getItem(playersWins));
        if (!retrievedWins) {
            return [];
        }
        return retrievedWins;
    }
}