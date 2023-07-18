import React, { useState, useEffect } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function CivTree(props) {
  return (
    <div className="columns is-gapless">
      <div className="column is-one-fifth has-background-grey-light">
        <LeftSide
          currentSelection={props.currentSelection}
          setCurrentSelection={props.setCurrentSelection}
          civDirectory={props.civDirectory}
        />
      </div>
      <div className="column">
        <RightSide
          currentSelection={props.currentSelection}
          setCurrentSelection={props.setCurrentSelection}
        />
      </div>
    </div>
  );
}

export default CivTree;
