import Papa from "papaparse";
import { Redirect } from "react-router-dom";

//importing CSVs
import engTree from "../CSV/ENG Buildings.csv";
import leftSideInfo from "../CSV/LeftSide Info.csv";

//importing flag images
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

//Civ Directory start
//let civDirectory = {};
let unitDirectory = {};

class name {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class leftSide {
  constructor(dates, flag, overview, civBonuses) {
    this.dates = dates;
    this.flag = flag;
    this.overview = overview;
    this.civBonuses = civBonuses;
  }
}

class rightSide {
  constructor(buildings, uniqueitems) {
    this.buildings = buildings;
    this.uniqueitems = uniqueitems;
  }
}

export async function buildDirectories() {
  try {
    const response = await fetch(leftSideInfo);
    const csvText = await response.text();

    const parsedData = Papa.parse(csvText, { header: true }).data;
    const civDirectory = {};

    parsedData.forEach((row) => {
      const {
        ID,
        DisplayName,
        Dates,
        Keywords,
        Overview,
        bp1,
        bp2,
        bp3,
        bp4,
        bp5,
        bp6,
        bp7,
        bp8,
        bp9,
        bp10,
        bp11,
      } = row;

      const bulletPoints = {
        bp1,
        bp2,
        bp3,
        bp4,
        bp5,
        bp6,
        bp7,
        bp8,
        bp9,
        bp10,
        bp11,
      };

      for (const key in bulletPoints) {
        if (!bulletPoints[key]) {
          delete bulletPoints[key];
        }
      }

      civDirectory[ID] = {
        DisplayName,
        Dates,
        Keywords,
        Overview,
        bulletPoints,
      };
    });

    //console.log(civDirectory);
    return civDirectory;
  } catch (error) {
    console.error("Error parsing CSV:", error);
  }
}

export async function utilitiesfinished() {
  const result = "hello world";
  console.log("utilities finished");
  return result;
}

export function updateCurrentSelection(event) {
  const selectedID = event.currentTarget.id;
  toString(selectedID);
  localStorage.setItem("curSEL", selectedID);
  console.log("update to Current Selection:", localStorage.getItem("curSEL"));
}

export function goToCivTree() {
  return new Promise((resolve, reject) => {
    console.log("go to civtree function start.");
    window.location.href = "/civtree";
    console.log("go to civtree function end.");
    resolve();
  });
}
