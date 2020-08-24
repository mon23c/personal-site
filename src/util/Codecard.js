import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Code } from "@material-ui/icons";

const Codecard = (classes) => {
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Code />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Nama Projek
        </Typography>
        <Typography gutterBottom>
          Aut ab aut quam ea est vel magnam minus. Asperiores sit nesciunt est
          dolorum nam deserunt. Incidunt est dolorem dolor error delectus dicta
          dignissimos. Est sit distinctio mollitia magni facilis deserunt
          aperiam. Sequi totam exercitationem sint est. Ex velit fuga ex
          repudiandae aut. Atque quia odit quia sapiente et architecto sunt.
          Distinctio porro adipisci labore deserunt est ad et ut. Nemo omnis
          rerum accusantium quia et necessitatibus neque. Et molestiae unde
          nobis necessitatibus tempora consectetur aperiam temporibus. Qui et
          quis in aliquid ea.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Codecard;
