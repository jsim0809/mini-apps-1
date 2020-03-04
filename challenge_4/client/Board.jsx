import React from 'react';

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