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
import { Home } from "@material-ui/icons";

const Navbar = (classes) => {
  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar>
        <Box display="flex" flexGrow={1}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Home />
          </IconButton>
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
          <Tab label="About" wrapped />
          <Tab label="Experiences" wrapped />
          <Tab label="Projects" wrapped />
          <Tab label="Contacts" wrapped />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
