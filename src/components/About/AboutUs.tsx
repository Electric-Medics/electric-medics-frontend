import React from 'react';
import AboutUsIcon from '../../assets/images/AboutUsIcon.png';

const AboutUs = () => {
  return (
    <div
      className='container'
      style={{
        textAlign: 'center',
        fontFamily: 'Work Sans, sans-serif',
        padding: '15px',
      }}
    >
      <img
        src={AboutUsIcon}
        alt='aboutIcon'
        style={{
          display: 'block',
          marginTop: '15px',
          marginBottom: '40px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxHeight: '125px',
          maxWidth: '125px',
        }}
      ></img>
      <h1 style={{ marginBottom: '30px', fontWeight: 600 }}>
        Why Homeowners Trust Electric Medics
      </h1>
      <p style={{ fontWeight: 400, fontSize: '21px' }}>
        Delivering amazing results since 1995, Electric Medics are homeowners
        number #1 choice in Mission Viejo <br />
        for all of your electrical service and repair needs. We’re a small team
        and are owner operated, so you get to work directly <br />
        with the owner instead of a rookie technician. If any questions arise
        during the project, you will talk directly with us in person — and get
        the answers you’re looking for right on the spot. <br /> <br />
        Our customers love us for our meticulous attention to detail. Unlike
        many of our competitors in our region, we aren’t a production team, so
        we can focus completely on you — our valued client. We understand that
        as a homeowner, you have your own unique needs and challenges, and we
        tailor our services specifically to meet your needs.
      </p>
    </div>
  );
};

export default AboutUs;
