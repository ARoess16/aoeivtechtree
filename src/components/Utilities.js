import Papa from "papaparse";
import { Redirect } from "react-router-dom";

//importing CSVs
import engTree from "../CSV/ENG Buildings.csv";
import leftSideInfo from "../CSV/LeftSide Info.csv";
import tileInfo from "../CSV/Tile Information.csv";

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
    //Begin Civ Directory
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

    //adding ENGTree to civDirectory
    const engTreeResponse = await fetch(engTree);
    const engTreeCsvText = await engTreeResponse.text();
    const engTreeData = Papa.parse(engTreeCsvText, { header: true }).data;
    const engBuildings = {};
    const engBuildingOrder = [];

    engTreeData.forEach((row) => {
      const { building, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12 } =
        row;

      engBuildingOrder.push(building);

      engBuildings[building] = {
        t1,
        t2,
        t3,
        t4,
        t5,
        t6,
        t7,
        t8,
        t9,
        t10,
        t11,
        t12,
      };
    });

    for (const building in engBuildings) {
      const tiles = engBuildings[building];
      for (const key in tiles) {
        if (!tiles[key]) {
          delete tiles[key];
        }
      }
    }

    civDirectory["ENG"]["Buildings"] = engBuildings;
    civDirectory["ENG"]["BuildOrder"] = engBuildingOrder;

    // // Populate Buildings for the ENG civilization
    // if (engTreeData.length > 0 && engTreeData[0].length > 0) {
    //   const buildingsData = engTreeData[0][0];
    //   civDirectory["ENG"].Buildings = buildingsData;
    // }

    //Begin Tile Info Directory
    const tileInfoResponse = await fetch(tileInfo);
    const tileInfoCsvText = await tileInfoResponse.text();
    const tileInfoParsedData = Papa.parse(tileInfoCsvText, {
      header: true,
    }).data;

    const tileInfoDirectory = {};

    tileInfoParsedData.forEach((row) => {
      const {
        unitID,
        unitdisplayname,
        cost,
        stats,
        startingage,
        upgradeto,
        unique,
        tiletype,
      } = row;

      tileInfoDirectory[unitID] = {
        unitdisplayname,
        cost,
        stats,
        startingage,
        upgradeto,
        unique,
        tiletype,
      };
    });

    console.log("EngTREE:", engBuildingOrder, engBuildings);
    console.log("Civ Directory:", civDirectory);
    console.log("Tile info:", tileInfoDirectory);
    return { civDirectory, tileInfoDirectory };
  } catch (error) {
    console.error("Error parsing CSV:", error);
  }
}

export async function utilitiesfinished() {
  const result = "hello world";
  console.log("utilities finished");
  return result;
}

export function updateCurrentSelection(selectedID) {
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
