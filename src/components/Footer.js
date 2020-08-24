import React from "react";
import { Typography } from "@material-ui/core";

const Footer = (classes) => {
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        {"Adrian Wijaya est. "}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
