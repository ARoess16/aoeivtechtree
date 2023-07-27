import React, { useState, useEffect } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function CivTree(props) {
  //Wait to render till civDirectoryFinal is complete.
  if (!props.civDirectoryFinal) {
    return <div>Loading...</div>;
  }
  //const currentSelection = props.currentSelection;

  const helpplease = props.tileInfoDirectory;
  console.log("CivTree tile Directory:", helpplease);

  return (
    <div className="is-fullheight is-flex is-flex-direction-column">
      <div className="columns is-fullheight is-align-items-flex-start">
        <div className="column is-fullheight is-one-fourth">
          <LeftSide
            civDirectoryFinal={props.civDirectoryFinal}
            setCurrentSelectionFinal={props.setCivSelectionFinal}
            currentSelection={props.currentSelection}
          />
        </div>
        <div className="column">
          <RightSide
            civDirectoryFinal={props.civDirectoryFinal}
            setCurrentSelectionFinal={props.setCivSelectionFinal}
            currentSelection={props.currentSelection}
            tileInfoDirectory={props.tileInfoDirectory}
            setTileInfoDirectory={props.setTileInfoDirectory}
          />
        </div>
      </div>
    </div>
  );
}

export default CivTree;
