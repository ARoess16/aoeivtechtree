import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bulma/css/bulma.min.css";
import "./App.css";

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import CivTree from "./components/CivTree.js";

import * as Utilities from "./components/Utilities.js";

function App() {
  const [currentSelection, setCurrentSelection] = useState("ENG");
  const [civDirectory, setCivDirectory] = useState();

  useEffect(() => {
    console.log("Component has mounted");
    Utilities.buildObjectFromCSV().then((retDir) => {
      console.log("utilities ran:");
      setCivDirectory(retDir.civDirectory);
      console.log(civDirectory);
    });
  }, []);

  return (
    <div className="columns is-flex-direction-column is-fullheight-100vh">
      <Header className="column is-narrow" />

      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                className="column"
                currentSelection={currentSelection}
                setCurrentSelection={setCurrentSelection}
              />
            }
          ></Route>
          <Route
            path="/civtree"
            element={
              <CivTree
                className="column"
                currentSelection={currentSelection}
                setCurrentSelection={setCurrentSelection}
                civDirectory={civDirectory}
              />
            }
          ></Route>
        </Routes>
      </Router>

      <Footer className="column is-narrow" />
    </div>
  );
}

export default App;
