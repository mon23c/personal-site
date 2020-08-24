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
        <GitHub color="action" style={{ fontSize: 100 }} />
        <LinkedIn color="action" style={{ fontSize: 100 }} />
        <Email color="action" style={{ fontSize: 100 }} />
      </Grid>
    </Container>
  );
};

export default Contact;
