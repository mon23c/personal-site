import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { GitHub, LinkedIn, Email } from "@material-ui/icons";

const Contact = (classes) => {
  return (
    <Container>
      <Typography variant="h3" color="textPrimary" align="center" paragraph>
        Find me on
      </Typography>
      <Grid container justify="center">
        <a href="https://github.com/mon23c">
          <GitHub color="action" style={{ fontSize: 100 }} />
        </a>
        <a href="https://www.linkedin.com/in/adrian-wijaya-179b86143/">
          <LinkedIn color="action" style={{ fontSize: 100 }} />
        </a>
        <a href="mailto:adrianwijaya100@gmail.com?Subject=Hi">
          <Email color="action" style={{ fontSize: 100 }} />
        </a>
      </Grid>
    </Container>
  );
};

export default Contact;
