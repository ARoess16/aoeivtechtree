import React, { useState, useEffect } from "react";
import { updateCurrentSelection } from "./Utilities";
import Select from "react-select";

//import flags and civtiles object.
import ABBflag from "./images/ABBflag.png";
import CHIflag from "./images/CHIflag.png";
import DELflag from "./images/DELflag.png";
import ENGflag from "./images/ENGflag.png";
import FREflag from "./images/FREflag.png";
import HREflag from "./images/HREflag.png";
import MALflag from "./images/MALflag.png";
import MONflag from "./images/MONflag.png";
import OTTflag from "./images/OTTflag.png";
import RUSflag from "./images/RUSflag.png";
import { civtiles } from "./Main.js";

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

  const selectedCivTile = civtiles.find(
    (civtile) => civtile.id === currentSelection
  );
  const selectedIMG = selectedCivTile ? selectedCivTile.img : null;

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      // Text: "#d4ad58",
      color: state.isSelected ? "#212529" : "#fff",
      backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#151824",
      padding: "4px",
      border: "4px",
      // borderColor: "#d4ad58",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  return (
    <div className="leftsidecss">
      <div className="columns">
        <div className="column mainbg m-3">
          <Select
            // className="dropdown"
            styles={customStyles}
            defaultValue={"6"}
            autoFocus={true}
            options={civOptions}
          />
        </div>
        <div className="column">
          <img className="leftsideflagwidth" src={selectedIMG} alt="..." />
        </div>
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
    </div>
  );
}

export default LeftSide;
