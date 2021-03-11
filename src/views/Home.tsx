import React from 'react';

import AboutUs from '../components/About/AboutUs';
import Carousel from '../components/Carousel/Carousel';
import HomeReviews from '../components/HomeReviews/HomeReviews';
import ServiceCards from '../components/ServiceCards/ServiceCards';

const Home = () => {
  return (
      <>
        <Carousel />
        <AboutUs />
        <HomeReviews />
        <ServiceCards />
      </>
  );
};

export default Home;
