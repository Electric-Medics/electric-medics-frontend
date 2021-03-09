import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import HomeReviews from '../components/HomeReviews/HomeReviews';
import AboutUs from '../components/About/AboutUs';
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
