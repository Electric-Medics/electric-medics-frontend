import React from 'react';

import FormBackground from '../../assets/images/formBackground.jpg';
import RequestFormMap from '../../assets/images/requestFormMap.png';
import './RequestForm.css';
const RequestForm = () => {
  return (
    <div
      className='container-fluid py-4'
      style={{
        background: `url(${FormBackground}) no-repeat center center /cover`,
      }}
    >
      <div className='row'>
        <div className='col-6 mt-5 ms-5'>
          <h1 className='ms-4' style={{ color: 'rgb(241, 136, 5)' }}>
            Serving Mission Viejo and surrounding areas
          </h1>
          <a href='https://www.google.com/maps/place/Electric+Medics/@33.613528,-117.6789378,15z/data=!4m5!3m4!1s0x0:0xbfe07d4931a23eaf!8m2!3d33.613528!4d-117.6789378'>
            <img
              src={RequestFormMap}
              alt='Map of southern Orange County'
              style={{
                width: '90%',
                height: '90%',
                borderRadius: '50px',
                border: '2px solid rgb(241, 136, 5)',
              }}
            />
          </a>
        </div>
        <div className='col-5 mt-5 ms-5'>
          <h1
            className='text-center'
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 600,
              color: 'rgb(241, 136, 5)',
            }}
          >
            Submit a Request
          </h1>
          <div className='container-fluid' style={{ color: 'white' }}>
            <div>
              <form class='row g-3'>
                <div class='col-md-6'>
                  <label for='inputFullName' class='form-label'>
                    Full Name
                  </label>
                  <input type='text' class='form-control' id='inputFullName' />
                </div>
                <div class='col-md-6'>
                  <label for='email' class='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='inputEmail'
                    placeholder='johndoe@email.com'
                  />
                </div>
                <div class='col-12'>
                  <label for='phoneNumber' class='form-label'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    class='form-control'
                    id='inputPhoneNumber'
                    placeholder='949-'
                  />
                </div>
                <div class='col-12'>
                  <label for='city' class='form-label'>
                    City
                  </label>
                  <input type='text' class='form-control' id='city' />
                </div>
                <div class='col-12'>
                  <label for='request' class='form-label'>
                    How can we help you?
                  </label>
                  <textarea type='text' class='form-control' id='request' />
                </div>
                <div class='col-12'>
                  <button
                    type='submit'
                    class='btn btn-lg'
                    style={{
                      backgroundColor: 'rgb(241, 136, 5)',
                      borderColor: 'rgb(241, 136, 5)',
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
