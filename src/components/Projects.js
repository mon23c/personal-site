import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import Codecard from "../util/Codecard";
import { projects } from "../constant/data";

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
        {projects.map((project) => (
          <Grid item xs={12} md={4} sm={6}>
            <Codecard
              name={project.name}
              link={project.link}
              content={project.content}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
