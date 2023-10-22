import React from "react";
import "./Square";
import Square from "./Square";

const Gameboard = () => {
  return (
    <div className="gameboard flex">
      <div>
        <Square num="1" />
        <Square num="2" />
        <Square num="3" />
      </div>

      <div>
        <Square num="4" />
        <Square num="5" />
        <Square num="6" />
      </div>

      <div>
        <Square num="7" />
        <Square num="8" />
        <Square num="9" />
      </div>
    </div>
  );
};

export default Gameboard;
