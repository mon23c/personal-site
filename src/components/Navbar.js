import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Tabs,
  Tab,
  Hidden,
} from "@material-ui/core";
import { Link } from "react-scroll";
import * as url from "../assets/A.ico";

const Navbar = (classes) => {
  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <Link to="home" smooth={true} duration={1000}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img src={url.default} style={{ width: 38 }} />
            </IconButton>
          </Link>
          <Hidden smDown>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ alignSelf: "center" }}
            >
              Adrian Wijaya
            </Typography>
          </Hidden>
        </Box>
        <Tabs
          aria-label="Navbar information"
          scrollButtons="on"
          variant="scrollable"
        >
          <Link to="about" smooth={true} duration={1000}>
            <Tab label="About" wrapped />
          </Link>
          <Link to="experience" smooth={true} duration={1000}>
            <Tab label="Experiences" wrapped />
          </Link>
          <Link to="project" smooth={true} duration={1000}>
            <Tab label="Projects" wrapped />
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            <Tab label="Contacts" wrapped />
          </Link>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
