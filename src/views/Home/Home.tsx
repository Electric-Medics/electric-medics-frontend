import React from "react";
import "./Home.css";
import MainCarousel from "../../components/Carousel/MainCarousel";
import { Grid } from "@material-ui/core";

const Home = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <MainCarousel />
      </Grid>
    </Grid>
  ); 
};

export default Home;
