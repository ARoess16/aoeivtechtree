import React, { useState, useEffect } from "react";

function LeftSide(props) {
  console.log("leftside:", props.civDirectory);
  return (
    <div className="container">
      <div>{props.currentSelection}</div>
    </div>
  );
}

export default LeftSide;
