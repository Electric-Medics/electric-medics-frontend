import React from "react";
import { Card, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  card: {
    backgroundColor: "#ff7c7c",
    borderRadius: 5,
    padding: "75px 50px",
    margin: "0px 25px",
    width: "500px",
    boxShadow: "20px 20px 20px black",
    display: "flex",
    justifyContent: "center",
  },
});

const MainCarousel = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <h1>Dick</h1>
    </Card>
  );
}

export default MainCarousel;