import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Code } from "@material-ui/icons";

const Codecard = (props) => {
  console.log(JSON.stringify(props));
  return (
    <Card variant="outlined">
      <CardContent>
        <Code />
        <Typography color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography gutterBottom>{props.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Codecard;
