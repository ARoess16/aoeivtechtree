import React, { useState, useEffect } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function CivTree(props) {
  //Wait to render till civDirectoryFinal is complete.
  if (!props.civDirectoryFinal) {
    return <div>Loading...</div>;
  }

  const helpplease = props.civDirectoryFinal;
  console.log("CivTree Directory:", helpplease);

  return (
    <div className="is-flex is-flex-direction-column">
      <div className="columns is-fullheight is-align-items-flex-start">
        <div className="column is-one-fourth">
          <LeftSide
            civDirectoryFinal={props.civDirectoryFinal}
            setCurrentSelectionFinal={props.setCivSelectionFinal}
          />
        </div>
        <div className="column">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default CivTree;
