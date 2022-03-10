import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/About"> About Me</Link>
        <Link to="/Portfolio"> Portfolio </Link>
        <Link to="/Test"> Test </Link>
      </header>
    </div>
  );
}

export default App;
