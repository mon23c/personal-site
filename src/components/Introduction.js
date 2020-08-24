import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import TypeWriter from "../util/typewriter";

const Introduction = (classes) => {
  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        <TypeWriter text="Adrian Wijaya" speed={75} delay={1250} />
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Aspiring Software Engineer
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              See What's Below
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              My Resume
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Introduction;