import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import HomeReviews from '../components/HomeReviews/HomeReviews';
import AboutUs from '../components/About/AboutUs';
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
