import React from "react";

const Resets = ({ resetBoard }) => {
  return (
    <div className="flex">
      <button>New Game</button>
      <button onClick={resetBoard}>Reset</button>
    </div>
  );
};

export default Resets;
