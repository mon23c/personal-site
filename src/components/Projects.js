import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import Codecard from "../util/Codecard";

const Projects = (classes) => {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Projects
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
        <Grid item xs={12} md={4} sm={6} spacing={3}>
          <Codecard classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
