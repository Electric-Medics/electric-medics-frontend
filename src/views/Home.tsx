import React from 'react';

import AboutUs from '../components/AboutUs/AboutUs';
import Carousel from '../components/Carousel/Carousel';
import FadeInSection from '../components/FadeInSection/FadeInSection';
import HomeReviews from '../components/HomeReviews/HomeReviews';
import RequestForm from '../components/RequestForm/RequestForm';
import ServiceCards from '../components/ServiceCards/ServiceCards';

const Home = () => {
  return (
    <>
      <Carousel />
      <AboutUs />
      <HomeReviews />
      <ServiceCards />
      <RequestForm />
      <FadeInSection />
    </>
  );
};

export default Home;
