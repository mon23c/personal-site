import React from "react";
import TypeWriter from "./util/typewriter.js";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles();

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar classes={classes} />
      <header className="App-header">
        <TypeWriter text="Coming Soon" speed={75} delay={1250} />
      </header>
    </div>
  );
}

export default App;
