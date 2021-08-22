import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AiOutlineHeart } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(data) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.resImg}
          title={data.resName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.resName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.resDetail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AiOutlineHeart size={40}/>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
