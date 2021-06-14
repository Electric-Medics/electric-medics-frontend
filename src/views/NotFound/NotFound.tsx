import React from 'react';
import { useHistory, useLocation } from 'react-router';

import background from '../../assets/images/NotFoundBackground.jpeg';
import './NotFound.css';

const NotFound = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div
      className='container-fluid pt-5'
      style={{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        minHeight: '70vh',
        minWidth: '100vw',
        fontFamily: 'Work Sans, sans-serif',
        letterSpacing: '1px',
        color: 'white',
      }}
    >
      <div className='row d-flex mt-3' style={{ height: '100%' }}>
        <div className='col-10 offset-md-1'>
          <div
            className='display-1 text-center'
            style={{ paddingTop: '30px', fontWeight: 300 }}
          >
            Uh oh... it looks like someone turned off the power.
          </div>
          <p
            className='text-center'
            style={{ fontSize: '30px', fontWeight: 300 }}
          >
            Don't be scared it's just a 404 error!
          </p>
          <p
            className='text-center'
            style={{ fontSize: '30px', fontWeight: 300 }}
          >
            While {location.pathname} doesn't exist, you can always go back to
            the home page!
          </p>
        </div>
        <div
          className='col-6 offset-md-3 d-flex justify-content-center mb-5 pb-5'
          onClick={() => history.push('/')}
        >
          <span className='containerNotFound'>
            <span className='btnNotFound'>
              <span style={{ fontSize: '22px' }}>Return To Home</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
