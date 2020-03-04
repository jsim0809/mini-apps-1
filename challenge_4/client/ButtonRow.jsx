import React from 'react';

var ButtonRow = ({ clickHandler }) => (
  <table>
      <tr>
        <td><button name="0" onClick={clickHandler}>O</button></td>
        <td><button name="1" onClick={clickHandler}>O</button></td>
        <td><button name="2" onClick={clickHandler}>O</button></td>
        <td><button name="3" onClick={clickHandler}>O</button></td>
        <td><button name="4" onClick={clickHandler}>O</button></td>
        <td><button name="5" onClick={clickHandler}>O</button></td>
        <td><button name="6" onClick={clickHandler}>O</button></td>
      </tr>
  </table>
);

export default ButtonRow;