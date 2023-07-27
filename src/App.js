import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./App.css";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import CivTree from "./components/CivTree.js";

import * as Utilities from "./components/Utilities.js";

//local storage
localStorage.setItem("curSEL", "ABB");

// console.log("Local Storage:", localStorage.getItem("curSEL"));

function App() {
  const [tileInfoDirectory, setTileInfoDirectory] = useState();
  const [civDirectoryFinal, setCivDirectoryFinal] = useState();

  useEffect(() => {
    console.log("Component has mounted");
    Utilities.buildDirectories().then((retObj) => {
      console.log("utilities ran:");
      setCivDirectoryFinal(retObj.civDirectory);
      setTileInfoDirectory(retObj.tileInfoDirectory);
      console.log("tileInfoDirectory:", tileInfoDirectory);
      console.log("civDirectoryFinal:", civDirectoryFinal);
      console.log(
        "local storage in useEFfect:",
        localStorage.getItem("curSEL")
      );
    });
  }, []);

  const [currentSelection, setCurrentSelection] = useState(
    localStorage.getItem("curSEL")
  );

  useEffect(() => {
    // Update the state whenever currentSelection prop changes
    setCurrentSelection(localStorage.getItem("curSEL"));
  }, [localStorage.getItem("curSEL")]);
  // console.log("2nd obj outsideUSEeffect:", civDirectoryFinal);

  return (
    <div className="App is-flex-direction-column">
      <Header className="column is-narrow" />

      <main className="App-content mainbg">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  className="column"
                  civDirectoryFinal={civDirectoryFinal}
                  setCivDirectoryFinal={setCivDirectoryFinal}
                />
              }
            ></Route>
            <Route
              path="/civtree"
              element={
                <CivTree
                  className="column"
                  civDirectoryFinal={civDirectoryFinal}
                  setCivDirectoryFinal={setCivDirectoryFinal}
                  currentSelection={currentSelection}
                  tileInfoDirectory={tileInfoDirectory}
                  setTileInfoDirectory={setTileInfoDirectory}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </main>

      <Footer className="column is-narrow" />
    </div>
  );
}

export default App;
