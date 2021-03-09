import React from 'react';
import { Grid } from '@material-ui/core';
import Carousel from '../components/Carousel/Carousel';
import HomeReviews from '../components/HomeReviews';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Carousel />
        <HomeReviews />
      </Grid>
    </Grid>
  );
};

export default Home;
