import React from "react";
import { Typography } from "@material-ui/core";

const Footer = (classes) => {
  return (
    <footer className={classes.footer} style={{ justifyContent: "flex-end" }}>
      <Typography variant="h6" align="center" color="textPrimary" gutterBottom>
        {"Adrian Wijaya est. "}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
