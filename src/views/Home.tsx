import React from 'react';
import { Grid } from '@material-ui/core';
import Carousel from '../components/Carousel/Carousel';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Carousel />
      </Grid>
    </Grid>
  );
};

export default Home;
