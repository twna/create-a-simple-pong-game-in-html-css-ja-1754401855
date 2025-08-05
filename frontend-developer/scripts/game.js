class Game {
  constructor() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.currentPlayer = 1;
    this.winner = null;
  }

  playTurn(points) {
    if (this.winner !== null) {
      console.log(`Game over! Player ${this.winner} has already won.`);
      return;
    }

    if (this.currentPlayer === 1) {
      this.player1Score += points;
      if (this.player1Score >= 100) {
        this.winner = 1;
        console.log(`Player 1 wins with a score of ${this.player1Score}!`);
      }
    } else {
      this.player2Score += points;
      if (this.player2Score >= 100) {
        this.winner = 2;
        console.log(`Player 2 wins with a score of ${this.player2Score}!`);
      }
    }

    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  getScores() {
    return {
      player1Score: this.player1Score,
      player2Score: this.player2Score,
      currentPlayer: this.currentPlayer,
      winner: this.winner
    };
  }
}

// Usage
const game = new Game();
game.playTurn(10); // Player 1's turn
game.playTurn(15); // Player 2's turn
// ... continue playing turns until there's a winner
{
  "checklist": [
    {"task": "Initialize game state", "completed": true},
    {"task": "Handle player turns", "completed": true},
    {"task": "Update scores", "completed": true},
    {"task": "Check for winner", "completed": true},
    {"task": "Switch players", "completed": true},
    {"task": "End game when winner is found", "completed": true},
    {"task": "Provide game status", "completed": true}
  ]
}