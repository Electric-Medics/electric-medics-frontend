import React from 'react';
import { useHistory } from 'react-router';

import Logo from '../../assets/images/transparentLogo.png';
import './Header.css';

const Header = () => {
  let history = useHistory();
  return (
    <div className='container-fluid pt-3'>
      <div className='row' style={{ maxHeight: '137px' }}>
        <div
          className='col-3 d-flex justify-content-center p-0 logo'
          style={{
            background: `url(${Logo})`,
            backgroundSize: '90%',
            backgroundRepeat: 'no-repeat',
            height: '137px',
            maxHeight: '137px',
            color: 'white',
            marginLeft: '25px',
            maxWidth: '260px',
            marginRight: '30px',
          }}
          onClick={() => {
            history.push('/');
          }}
        ></div>
        <div className='col-3 pt-2'>
          <p className='header-title'>The Best Electricians</p>
          <p className='header-text'>
            Serving Mission Viejo and Surrounding Areas
          </p>
        </div>
        <div className='col-3 pt-2'>
          <p className='header-title'>BUSINESS HOURS:</p>
          <p className='header-text'>Monday - Friday: 8:00AM - 5:00PM</p>
        </div>
        <div className='col-2 pt-3 align-self-start'>
          <span className='containerSubmitRequest'>
            <span className='btnSubmitRequest'>
              <span>SUBMIT REQUEST</span>
            </span>
          </span>
        </div>
        <div className='col-1'>
          <a href='https://www.google.com/maps/place/Electric+Medics/@33.613528,-117.6789378,15z/data=!4m5!3m4!1s0x0:0xbfe07d4931a23eaf!8m2!3d33.613528!4d-117.6789378'>
            <i
              className='fas fa-map-marker-alt fa-3x'
              style={{ color: 'rgb(26, 143, 227)', paddingTop: '20px' }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
