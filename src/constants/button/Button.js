import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor:" rgba(0, 0, 0, 0.801)",
      width: 150,
      height: 40
    },
  },
}));

export default function BlueButton({txt}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button variant="contained" color="primary">
        {txt}
      </Button>
      
    </div>
  );
}
