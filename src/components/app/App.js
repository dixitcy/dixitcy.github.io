import React from "react";
import "./App.css";
import "./twemoji-awesome.css";
import { Router, Redirect } from "@reach/router";
import Resume from "../resume/resume.js";

import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">      
      <Router style={{ height: "100%" }}>
       
        <Resume path="/" />
      </Router>
    </div>
  );
}

export default App;
