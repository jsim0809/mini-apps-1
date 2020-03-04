import React from 'react';
import WhoseTurn from './WhoseTurn.jsx';
import Board from './Board.jsx';
import ButtonRow from './ButtonRow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redTurn: true,
      board: [['R'], ['Y','R'], [], [], [], [], []] 
    }
  }

  render() {
    return (
      <div>
        <h2>Connect Four</h2>
        <p>Get 4 in a row to win!</p>
        <WhoseTurn redTurn={this.state.redTurn} />
        <Board board={this.state.board} />
        {/* <ButtonRow /> */}
      </div>
    )
  }
} 

export default App;