import React from 'react';

import AboutUs from '../components/About/AboutUs';
import Carousel from '../components/Carousel/Carousel';
import HomeReviews from '../components/HomeReviews/HomeReviews';
import RequestForm from '../components/RequestForm/RequestForm';

const Home = () => {
  return (
    <>
      <Carousel />
      <AboutUs />
      <HomeReviews />
      <RequestForm />
    </>
  );
};

export default Home;
