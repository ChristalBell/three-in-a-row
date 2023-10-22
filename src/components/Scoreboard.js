import React from "react";

const Scoreboard = ({ score, player1 }) => {
  const { xScore, oScore } = score;
  return (
    <div>
      <h3 className="flex">Turn </h3>
      <div className=" flex">
        <div>
          <h2>Wins Player X</h2>
          <input type="text" name="playerx" placeholder={xScore}></input>
        </div>

        <div>
          <h2>Wins Player O</h2>
          <input type="text" name="playero" placeholder={oScore}></input>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
