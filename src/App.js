import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { makeStyles } from "@material-ui/core";
import Introduction from "./components/Introduction.js";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar classes={classes} />
      <div className="light-gray" id="home">
        <Introduction className="App-header" classes={classes} />
      </div>
      <div className="light" id="about">
        <About classes={classes} />
      </div>
      <div className="light-gray" id="experience">
        <Experiences classes={classes} />
      </div>
      <div
        className="light"
        style={{ justifyContent: "flex-start" }}
        id="project"
      >
        <Projects classes={classes} />
      </div>
      <div className="light-gray" id="contact">
        <Contact classes={classes} />
      </div>
      <Footer classes={classes} />
    </div>
  );
}

export default App;
