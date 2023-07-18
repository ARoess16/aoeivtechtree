import React, { useState } from "react";

import "bulma/css/bulma.min.css";
import "../App.css";

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
import { updateCurrentSelection } from "./Utilities";

function Main() {
  const [civtiles, setcivtiles] = useState([
    { Name: "Abbasid Dynasty", id: "ABB", value: "ABB", img: ABBflag },
    { Name: "Chinese", id: "CHI", value: "CHI", img: CHIflag },
    { Name: "Delhi Sultanate", id: "DEL", value: "DEL", img: DELflag },
    { Name: "English", id: "ENG", value: "ENG", img: ENGflag },
    { Name: "French", id: "FRE", value: "FRE", img: FREflag },
    { Name: "Holy Roman Empire", id: "HRE", value: "HRE", img: HREflag },
    { Name: "Malians", id: "MAL", value: "MAL", img: MALflag },
    { Name: "Mongols", id: "MON", value: "MON", img: MONflag },
    { Name: "Ottomans", id: "OTT", value: "OTT", img: OTTflag },
    { Name: "Rus", id: "RUS", value: "RUS", img: RUSflag },
  ]);

  const topROW = [];
  const bottomROW = [];

  function createCivTiles(i) {
    var civ = [];

    civ.push(
      <a href="civtree">
        <div className="column">
          <div
            className="card fixedwidth p-4 shadow-md is-cursor-pointer transform is-duration-300 hover-shadow-xl hover-translate-y"
            value={civtiles[i].value}
            id={civtiles[i].id}
            title={civtiles[i].Name}
            onClick={(event) => updateCurrentSelection(event, civtiles.id)}
          >
            <div className="card-image">
              <figure className="image">
                <img
                  className="object-contain"
                  src={civtiles[i].img}
                  alt="..."
                />
              </figure>
            </div>
            <div>
              <div className="content has-text-weight-bold has-text-grey has-text-centered">
                {civtiles[i].Name}
              </div>
            </div>
          </div>
        </div>
      </a>
    );
    return civ;
  }

  for (let i = 0; i < civtiles.length / 2; i++) {
    topROW.push(createCivTiles(i));
  }

  for (let i = civtiles.length / 2; i < civtiles.length; i++) {
    bottomROW.push(createCivTiles(i));
  }
  // <div className="grid h-9/10 content-start justify-center gap-y-12 border-[10px] border-[#D4AD58] bg-[#151824] bg-cover">
  return (
    <div className="">
      <h1 className="title is-2 has-text-gold has-text-centered ">
        Age of Empires IV Tech Tree
      </h1>
      <div className="columns is-justify-content-center">{topROW}</div>
      <div className="columns is-justify-content-center">{bottomROW}</div>
    </div>
  );
}

export default Main;
