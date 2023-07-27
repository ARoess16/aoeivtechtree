import React, { useState, useEffect } from "react";

function RightSide(props) {
  //const currentSelection = props.currentSelection;
  const currentSelection = "ENG";
  const civDirectoryFinal = props.civDirectoryFinal;
  const tileInfoDirectory = props.tileInfoDirectory;

  //chatgpt code:
  function BuildingGrid({ buildings, tileInfoDirectory }) {
    const gridItems = [];

    const createBlueBox = (value) => {
      const tileInfo = tileInfoDirectory[value];

      if (tileInfo) {
        const hasUpgradeTo =
          tileInfo.upgradeto && tileInfoDirectory[tileInfo.upgradeto];

        return (
          <div key={value} className="blue-box-container">
            <div className="blue-box">{tileInfo.unitdisplayname}</div>
            {hasUpgradeTo && (
              <>
                <div className="connecting-line"></div>
                {createBlueBox(tileInfo.upgradeto)}
              </>
            )}
          </div>
        );
      } else {
        return (
          <div key={value} className="blue-box">
            {value}
          </div>
        );
      }
    };

    for (const building in buildings) {
      const tiles = buildings[building];
      if (Object.keys(tiles).length > 0) {
        const grid = Object.entries(tiles).map(([key, value]) => {
          return createBlueBox(value);
        });

        gridItems.push(
          <div key={building} className="column ">
            <div className="building-name">
              {tileInfoDirectory[building]?.unitdisplayname || building}
            </div>
            <div className="grid-container columns">{grid}</div>
          </div>
        );
      }
    }

    return <div className="columns">{gridItems}</div>;
  }

  //New Chatgpt build --grid style--
  // function BuildingGrid({ buildings, civDirectoryFinal, tileInfoDirectory }) {
  //   const gridItems = [];

  //   for (const building in buildings) {
  //     const tiles = buildings[building];
  //     if (Object.keys(tiles).length > 0) {
  //       const numColumns = Object.keys(tiles).length;
  //       const numRows =
  //         9 - parseInt(tileInfoDirectory[building].startingage, 10);

  //       // Create a grid for the building
  //       const grid = (
  //         <div key={building} className="building-grid">
  //           {Array.from({ length: numRows }, (_, row) => (
  //             <div key={`row-${row}`} className="grid-row">
  //               {Array.from({ length: numColumns }, (_, col) => (
  //                 <div key={`col-${col}`} className="grid-element"></div>
  //               ))}
  //             </div>
  //           ))}
  //         </div>
  //       );

  //       gridItems.push(grid);
  //     }
  //   }

  //   return <div className="building-grid-container">{gridItems}</div>;
  // }

  return (
    <div className="has-text-white">
      <div className="rscontainer">
        {/* <div class="column ">
          <div class="building-name">Barracks</div>
          <div class="grid-container columns">
            <div class="parent">
              <div className="child"></div>
              <div className="child">
                <div class="blue-box">Hardened Spearman</div>
                <div class="connecting-line"></div>
              </div>
              <div className="child">
                <div class="blue-box">Veteran Spearman</div>
                <div class="connecting-line"></div>
              </div>
              <div className="child">
                <div class="blue-box-container">
                  <div class="blue-box">Elite Spearman</div>
                </div>
              </div>

              <div class="blue-box-container"></div>
            </div>
            <div class="parent">
              <div class="child">
                <div class="blue-box">Vanguard Man-at-Arms</div>
                <div class="connecting-line"></div>
              </div>
              <div class="child">
                <div class="blue-box">Early Man-at-Arms</div>
                <div class="connecting-line"></div>
              </div>
              <div class="child">
                <div class="blue-box">Man-at-Arms</div>
                <div class="connecting-line"></div>
              </div>
              <div class="child">
                <div class="blue-box">Elite Man-at-Arms</div>
              </div>
            </div>
            <div class="parent">
              <div class="child"></div>
              <div class="child"></div>
              <div class="child">
                <div class="blue-box">Armor Clad</div>
              </div>
              <div class="child"></div>
            </div>

            <div class="blue-box-container"></div>
          </div>
        </div> */}
        <BuildingGrid
          className=""
          buildings={civDirectoryFinal["ENG"]["Buildings"]}
          civDirectoryFinal={civDirectoryFinal}
          tileInfoDirectory={tileInfoDirectory}
        />
      </div>
    </div>
  );
}

export default RightSide;
