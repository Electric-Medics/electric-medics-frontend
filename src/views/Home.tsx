import React from 'react';
import { Grid } from '@material-ui/core';
import MainCarousel from '../components/Carousel/MainCarousel';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <MainCarousel />
      </Grid>
    </Grid>
  );
};

export default Home;
