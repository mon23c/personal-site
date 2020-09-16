import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { experiences } from "../constant/data";
import { ExpandMore } from "@material-ui/icons";

const Experiences = (classes) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Typography variant="h3" color="textPrimary" align="center" paragraph>
        Experiences & Achievement
      </Typography>
      {experiences.map((experience, index) => (
        <Accordion
          expanded={expanded === "panel" + index}
          onChange={handleChange("panel" + index)}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography className={classes.classes.heading}>
              {experience.title}
            </Typography>
            <Typography className={classes.classes.secondaryHeading}>
              {experience.time}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{experience.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Experiences;
