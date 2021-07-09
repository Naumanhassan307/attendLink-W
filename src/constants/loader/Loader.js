import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <p style={{ textAlign:"center" }}>Loading...</p>
      <LinearProgress style={{ backgroundColor: "rgba(0, 0, 0, 0.780)", color:"#FFFFFF" }} />
      <br />
    </div>
  );
}
