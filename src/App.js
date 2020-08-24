import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { makeStyles } from "@material-ui/core";
import Introduction from "./components/Introduction.js";

const useStyles = makeStyles();

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar classes={classes} />
      {/* <TypeWriter text="Coming Soon" speed={75} delay={1250} /> */}
      <div className="light-gray">
        <Introduction className="App-header" classes={classes} />
      </div>
    </div>
  );
}

export default App;
