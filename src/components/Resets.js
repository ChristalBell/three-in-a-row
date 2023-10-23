import React from "react";

const Resets = ({ resetBoard, resetScore }) => {
  return (
    <div className="flex">
      <button onClick={resetBoard}>New Game</button>
      {/* <button onClick={resetScore}>Reset</button> 
      this button is not working*/}
    </div>
  );
};

export default Resets;
