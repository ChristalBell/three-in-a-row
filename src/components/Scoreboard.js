import React from "react";

const Scoreboard = ({ score, player1 }) => {
  const { xScore, oScore } = score;
  return (
    <div className="scoreboard">
      <h3 className="flex">Turn </h3>
      <div className="flex  ">
        <div>
          <h2> Player X</h2>
          <h3>{xScore}</h3>
        </div>

        <div>
          <h2> Player O</h2>
          <h3>{oScore}</h3>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
