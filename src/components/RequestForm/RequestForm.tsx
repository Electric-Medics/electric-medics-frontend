import React from 'react';
import { useForm } from 'react-hook-form';

import GoogleMap from '../GoogleMap/GoogleMap';
import './RequestForm.css';

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  request: string;
};

const RequestForm = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = (data) => {
    for (const key in data) {
      data[key] = data[key].trim();
    }
  };
  interface Location {
    address: string;
    lat: number;
    lng: number;
  }

  let location: Location = {
    address: 'Mission Viejo, CA',
    lat: 33.5964498,
    lng: -117.6568104,
  };

  return (
    <>
      <div className='container-fluid pt-4'>
        <div
          className='row'
          style={{ maxHeight: '650px', marginBottom: '20px' }}
        >
          <div className='col-6 mt-5'>
            <GoogleMap location={location} zoomLevel={13} />
          </div>
          <div className='col-5 mt-3'>
            <h1
              className='text-center mb-3'
              style={{
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 400,
                color: 'black',
                maxHeight: '600px',
              }}
            >
              Submit a Request
            </h1>
            <div
              className='container-fluid'
              style={{
                color: 'black',
                fontFamily: 'Work Sans, sans-serif',
              }}
            >
              <div>
                <form
                  noValidate
                  className='row g-3'
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ minHeight: '500px', maxHeight: '501px' }}
                >
                  <div className='col-md-6 mb-1'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Enter your full name'
                      id='inputFullName'
                      ref={register({
                        required: true,
                        pattern: /^[a-z ,.'-]+$/i,
                      })}
                    />
                    {errors.name && (
                      <span className='error-msg'>This field is required</span>
                    )}
                  </div>
                  <div className='col-md-6 mb-1'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      id='inputEmail'
                      placeholder='Enter your email'
                      ref={register({
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                    />
                    {errors.email ? (
                      errors.email.type === 'pattern' ? (
                        <span className='error-msg'>
                          Please enter a valid email.
                        </span>
                      ) : (
                        <span className='error-msg'>
                          This field is required
                        </span>
                      )
                    ) : null}
                  </div>
                  <div className='col-12 mb-1'>
                    <input
                      type='tel'
                      name='phoneNumber'
                      className='form-control'
                      id='inputPhoneNumber'
                      placeholder='Enter your phone number'
                      ref={register({
                        required: true,
                        pattern:
                          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      })}
                    />
                    {errors.phoneNumber ? (
                      errors.phoneNumber.type === 'pattern' ? (
                        <span className='error-msg'>
                          Please enter a valid phone number.
                        </span>
                      ) : (
                        <span className='error-msg'>
                          This field is required
                        </span>
                      )
                    ) : null}
                  </div>
                  <div className='col-12 mb-1'>
                    <input
                      type='text'
                      className='form-control'
                      id='city'
                      name='city'
                      placeholder='Enter your city'
                      ref={register({ required: true, maxLength: 70 })}
                    />
                    {errors.city && (
                      <span className='error-msg'>This field is required</span>
                    )}
                  </div>
                  <div className='col-12 mb-1'>
                    <textarea
                      className='form-control'
                      name='request'
                      id='request'
                      placeholder='How can we help you?'
                      style={{ height: '150px' }}
                      ref={register({ required: true, maxLength: 500 })}
                    />
                    {errors.request && (
                      <span className='error-msg'>This field is required</span>
                    )}
                  </div>
                  <div className='col-12 d-flex justify-content-center'>
                    <button
                      type='submit'
                      className='btn btn-lg'
                      style={{
                        backgroundColor: 'rgb(241, 136, 5)',
                        borderColor: 'rgb(241, 136, 5)',
                        width: '70%',
                      }}
                    >
                      Submit your inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestForm;
