import React from 'react';

import background from '../../assets/images/contactUsBackground.png';
const ContactUs = () => {
  return (
    <div
      className='container-fluid py-5'
      style={{
        background: `url(${background})`,
        backgroundSize: '100% 100%',
        height: '600px',
        color: 'white',
      }}
    >
      <div className='row d-flex' style={{ height: '100%' }}>
        <div
          className='col-6 offset-md-3 d-flex justify-content-center'
          style={{ maxHeight: '650px' }}
        >
          <h1
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
              marginTop: '20%',
              fontSize: '50px',
              letterSpacing: '1px',
            }}
          >
            GET IN TOUCH WITH US TODAY!
          </h1>
        </div>
        <div className='col-6 offset-md-3 d-flex justify-content-center mb-5 pb-5'>
          <a
            href='mailto:mike@electricmedics.com, kristina@electricmedics.com?subject=Website%20Inquiry'
            style={{ textDecoration: 'none' }}
          >
            <span className='containerSubmitForm'>
              <span className='btnSubmitForm'>
                <span style={{ fontSize: '22px' }}>CONTACT US</span>
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
