import React, { useState, useEffect } from "react";
import { updateCurrentSelection } from "./Utilities";
import Select from "react-select";

function LeftSide(props) {
  let currentSelection = localStorage.getItem("curSEL");
  console.log("leftside current selection:", currentSelection);
  let civOBJ = props.civDirectoryFinal;
  console.log("leftside:", civOBJ);

  const bulletPointDivs = [];

  Object.values(props.civDirectoryFinal[currentSelection].bulletPoints).forEach(
    (bulletPoint, index) => {
      const div = (
        <div className="p-2 bpcss" key={index}>
          &#8226; {bulletPoint}
        </div>
      );
      bulletPointDivs.push(div);
    }
  );

  const civOptions = Object.entries(props.civDirectoryFinal).map(
    ([id, civData]) => ({
      value: id,
      label: civData.DisplayName,
    })
  );

  console.log("CivOPtions:", civOptions);

  return (
    <div className="leftsidecss">
      <div className="p-5">
        {props.civDirectoryFinal[currentSelection].DisplayName}
      </div>
      <div className="pb-0 pt-3 pr-3 pl-3 has-text-gold has-text-weight-bold">
        {props.civDirectoryFinal[currentSelection].Dates}
      </div>
      <div className="pb-3 pt-0 pr-3 pl-3 has-text-weight-bold">
        {props.civDirectoryFinal[currentSelection].Keywords}
      </div>
      <div className="p-3 pb-6 has-text-weight-bold">
        {props.civDirectoryFinal[currentSelection].Overview}
      </div>
      <div>{bulletPointDivs}</div>
      <Select options={civOptions} />
    </div>
  );
}

export default LeftSide;
