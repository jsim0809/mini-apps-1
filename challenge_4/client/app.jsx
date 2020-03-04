import React from 'react';
import WhoseTurn from './WhoseTurn.jsx';
import Board from './Board.jsx';
import ButtonRow from './ButtonRow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redTurn: true,
      invalidMove: false,
      board: [[], [], [], [], [], [], []],
      winner: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    var newState = JSON.parse(JSON.stringify(this.state));
    if (this.state.board[e.target.name].length >= 6) {
      newState.invalidMove = true;
    } else {
      newState.invalidMove = false;
      newState.board[e.target.name].push(this.state.redTurn ? 'R' : 'Y');
      if (this.winningBoard(newState.board)) {
        newState.winner = this.state.redTurn ? 'red' : 'yellow';
      }
      newState.redTurn = !newState.redTurn;
    }
    this.setState(newState);
  }

  winningBoard(board) {
    // Column win
    console.log(board);
    ['R', 'Y'].forEach((letter) => {
      for (var i = 0; i < board.length; i++) {
        if (board[i][2] === letter && board[i][3] === letter) {
          if ((board[i][0] === letter && board[i][1] === letter) ||
            (board[i][1] === letter && board[i][4] === letter) ||
            (board[i][4] === letter && board[i][5] === letter)) {
              return true;
            }
        }
      }
    });

    return false;
  }

  render() {
    return (
      <div>
        <h2>Connect Four</h2>
        <p>Get 4 in a row to win!</p>
        <WhoseTurn redTurn={this.state.redTurn} />
        <Board board={this.state.board} />
        <ButtonRow clickHandler={this.handleClick} />
        {this.state.invalidMove ? <p>Invalid move! Please try again.</p> : <p></p>}
        {this.state.winner ? <h3>{this.state.winner.toUpperCase()} player wins!</h3> : <h3></h3>}
      </div>
    )
  }
}

export default App;