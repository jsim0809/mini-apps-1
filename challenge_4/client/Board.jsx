import React from 'react';


// Draws the board by iterating through every element of the board state and checking if it contains a character or undefined.

var Board = ({ board }) => (
  <table>
    {[5, 4, 3, 2, 1, 0].map((rowNum) => (
      <tr>
        {board.map((column) => (
          <td>{column[rowNum] ? column[rowNum] : ' '}</td>
        ))}
      </tr>
    ))}
  </table>
);

export default Board;