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
      {/* <TypeWriter text="Coming Soon" speed={75} delay={1250} /> */}
      <div className="light-gray">
        <Introduction className="App-header" classes={classes} />
      </div>
      <div className="light">
        <About classes={classes} />
      </div>
      <div className="light-gray">
        <Experiences classes={classes} />
      </div>
      <div className="light" style={{ justifyContent: "flex-start" }}>
        <Projects classes={classes} />
      </div>
      <div className="light-gray">
        <Contact classes={classes} />
      </div>
      <Footer classes={classes} />
    </div>
  );
}

export default App;
