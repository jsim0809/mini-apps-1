import React from 'react';

var WhoseTurn = ({redTurn}) => (
  <p>It is <b><u>{redTurn ? "Red Player's" : "Yellow Player's"}</u></b> turn.</p>
);

export default WhoseTurn;