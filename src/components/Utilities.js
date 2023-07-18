import Papa from "papaparse";

//importing CSVs
import engTree from "../CSV/ENG Buildings.csv";
import leftSideInfo from "../CSV/LeftSide Info.csv";

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

export async function buildObjectFromCSV() {
  try {
    const response = await fetch(leftSideInfo);
    const csvText = await response.text();

    const parsedData = Papa.parse(csvText, { header: true }).data;

    // Process the parsed data as needed

    // Build the object using processed data
    const civDirectory = {};

    // Construct your object based on the processed data

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

      //console.log("Bp:", bulletPoints);

      civDirectory[ID] = {
        DisplayName,
        Dates,
        Keywords,
        Overview,
        bulletPoints,
      };
    });

    // Return or use the resulting object
    return civDirectory;
  } catch (error) {
    console.error("Error parsing CSV:", error);
    // Handle the error appropriately
  }
}

export async function utilitiesfinished() {
  const result = "hello world";
  console.log("utilities finished");
  return result;
}

export function updateCurrentSelection(event, setCurrentSelection) {
  const selectedID = event.currentTarget.id;
  setCurrentSelection(selectedID);
  console.log("update to Civ selection:", setCurrentSelection);
}
