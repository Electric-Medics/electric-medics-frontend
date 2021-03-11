import React from 'react';

import './Footer.css';
const Footer = () => {
  return (
    <div className='footer-dark'>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 item'>
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/reviews'>Reviews</a>
                </li>
                <li>
                  <a href='/showroom'>Showroom</a>
                </li>
              </ul>
            </div>
            <div className='col-sm-6 col-md-3 item'>
              <h3>About</h3>
              <ul>
                <li>
                  <a href='https://www.google.com/maps/place/Electric+Medics/@33.613528,-117.6789378,15z/data=!4m2!3m1!1s0x0:0xbfe07d4931a23eaf?sa=X&ved=2ahUKEwjh5tCCmqXvAhWXtp4KHQsGAs8Q_BIwEHoECCMQBQ'>
                    Company
                  </a>
                </li>
                <li>
                  <a href='/careers'>Careers</a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 item text'>
              <h3>Electric Medics</h3>
              <p>
                With over 20 years of experience, Electric Medics help
                homeowners in Mission Viejo solve all their electrical problems.
                Whether you’re looking for an emergency fix for your lighting or
                someone to help you wire your new spa, Electric Medics has the
                expertise and an unmatched level of customer service to help you
                get your home running the way it should.
              </p>
            </div>
            <div className='col item social'>
              <a href='https://www.facebook.com/electricmedics/'>
                <i className='fab fa-facebook'></i>
              </a>
              <a href='https://www.instagram.com/electricmedics/?hl=en'>
                <i className='fab fa-instagram'></i>
              </a>
              <a href='mailto:mike@electricmedics.com, kristina@electricmedics.com?subject=Website%20Inquiry'>
                <i className='fas fa-at'></i>
              </a>
              <a href='https://www.yelp.com/biz/electric-medics-mission-viejo'>
                <i className='fab fa-yelp'></i>
              </a>
            </div>
          </div>
          <p className='copyright'>Electric Medics © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
