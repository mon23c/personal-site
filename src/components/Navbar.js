import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
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
          <Typography
            variant="h6"
            className={classes.title}
            style={{ alignSelf: "center" }}
          >
            News
          </Typography>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
