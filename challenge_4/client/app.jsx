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
      board: [[], [], [], [], [], [], []]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    var newState = JSON.parse(JSON.stringify(this.state));
    if (this.state.board[e.target.name].length >= 6) {
      newState.invalidMove = true;
    } else {
      newState.board[e.target.name].push(this.state.redTurn ? 'R' : 'Y');
      newState.redTurn = !newState.redTurn;
      newState.invalidMove = false;
    }
    this.setState(newState);
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
      </div>
    )
  }
}

export default App;