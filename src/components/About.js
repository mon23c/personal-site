import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";

const About = (classes) => {
  return (
    <Grid container spacing={4}>
      <Grid container spacing={1} md={6}>
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
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Blablabla
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} md={6} justify="center">
        <Grid item>
          <Typography color="textPrimary">
            Aut repellat rerum aut repudiandae. Veniam quibusdam quod et est.
            Sunt sed quod possimus est omnis aut rerum. Quam animi non quos
            cupiditate. Id voluptatem rem enim quia ut velit veritatis. Rerum
            sit dolor voluptatem veritatis. Minus magni quaerat unde dolor. Eos
            id velit optio eligendi. Harum sequi ut sapiente aut excepturi
            itaque. Iure aut eveniet fugit ut dignissimos aut. Hic ducimus
            voluptatem illum voluptas ad quos ex. Officia et accusantium
            voluptatem et consequuntur. Et quia nemo consequatur adipisci vel
            repudiandae rerum. Voluptatem architecto perspiciatis eum. Sit
            numquam ut accusamus sed nam nobis provident.
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
  );
};

export default About;
