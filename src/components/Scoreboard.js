import React from "react";

const Scoreboard = () => {
  return (
    <div>
      <h3 className="flex">Turn </h3>
      <div className=" flex">
        <div>
          <h2>Wins Player X</h2>
        </div>

        <div>
          <h2>Wins Player O</h2>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
