import React from "react";
import { Typography, Grid } from "@material-ui/core";

const About = (classes) => {
  return (
    <Grid container spacing={4}>
      <Grid container item spacing={1} md={6}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Blablabla
          </Typography> */}
        </Grid>
      </Grid>
      <Grid container item spacing={2} md={6} justify="center">
        <Grid item>
          <Typography color="textPrimary">
            I'm a third year Computer Science studdent at University of
            Indonesia. I have an interest in full-stack development. I have
            experience in Competitive Programming since Senior High School
            altough I don't do it anymore. I also enjoy learning and seeing
            things in many perspectives.
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default About;
