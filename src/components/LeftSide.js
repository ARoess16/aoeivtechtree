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
  const [currentSelection, setCurrentSelection] = useState(
    localStorage.getItem("curSEL") || ""
  );

  useEffect(() => {
    // Listen for changes in localStorage
    const handleStorageChange = (event) => {
      if (event.key === "curSEL") {
        setCurrentSelection(event.newValue);
        console.log("leftside current selection:", currentSelection);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // const [currentSelection, setCurrentSelection] = useState(
  //   props.currentSelection
  // );

  // useEffect(() => {
  //   // Update the state whenever currentSelection prop changes
  //   setCurrentSelection(props.currentSelection);
  // }, [props.currentSelection]);

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

  const selectedCivOption = civOptions.find(
    (option) => option.value === currentSelection
  );

  const customStyles = {
    // menu: (defaultStyles) => ({
    //   ...defaultStyles,
    //   height: "150px",
    //   width: "220px",
    // }),

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
        <div className="column">
          <Select
            className="mainbg m-3"
            styles={customStyles}
            defaultValue={selectedCivOption}
            autoFocus={true}
            options={civOptions}
            onChange={(selectedOption) =>
              updateCurrentSelection(selectedOption.value)
            }
          />
          <div className="pb-0 pt-3 pr-3 pl-3 has-text-gold has-text-weight-bold">
            {props.civDirectoryFinal[currentSelection].Dates}
          </div>
          <div className="pb-3 pt-0 pr-3 pl-3 has-text-weight-bold">
            {props.civDirectoryFinal[currentSelection].Keywords}
          </div>
        </div>
        <div className="column">
          <img className="leftsideflagwidth" src={selectedIMG} alt="..." />
        </div>
      </div>

      <div className="pr-3 pl-3 pb-6 pt-0 has-text-weight-bold">
        {props.civDirectoryFinal[currentSelection].Overview}
      </div>
      <div>{bulletPointDivs}</div>
    </div>
  );
}

export default LeftSide;
