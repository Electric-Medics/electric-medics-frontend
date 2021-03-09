import React from 'react';
import { useForm } from 'react-hook-form';

import FormBackground from '../../assets/images/formBackground.jpg';
import RequestFormMap from '../../assets/images/requestFormMap.png';
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
  const onSubmit = (data) => console.log(data);
  return (
    <div
      className='container-fluid py-4'
      style={{
        background: `url(${FormBackground}) no-repeat center center /cover`,
      }}
    >
      <div className='row'>
        <div className='col-6 mt-5 ms-5'>
          <a href='https://www.google.com/maps/place/Electric+Medics/@33.613528,-117.6789378,15z/data=!4m5!3m4!1s0x0:0xbfe07d4931a23eaf!8m2!3d33.613528!4d-117.6789378'>
            <img
              src={RequestFormMap}
              alt='Map of southern Orange County'
              style={{
                width: '90%',
                height: '85%',
                borderRadius: '50px',
                border: '2px solid rgb(241, 136, 5)',
              }}
            />
          </a>
        </div>
        <div className='col-5 mt-5'>
          <h1
            className='text-center'
            style={{
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 600,
              color: 'white',
            }}
          >
            Submit a Request
          </h1>
          <div className='container-fluid' style={{ color: 'white' }}>
            <div>
              <form className='row g-3' onSubmit={handleSubmit(onSubmit)}>
                <div className='col-md-6'>
                  <label htmlFor='inputFullName' className='form-label'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
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
                <div className='col-md-6'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='inputEmail'
                    placeholder='johndoe@email.com'
                    ref={register({
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    })}
                  />
                  {errors.email && (
                    <span className='error-msg'>This field is required</span>
                  )}
                </div>
                <div className='col-12'>
                  <label htmlFor='phoneNumber' className='form-label'>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    name='phoneNumber'
                    className='form-control'
                    id='inputPhoneNumber'
                    placeholder='949-'
                    ref={register({
                      required: true,
                      pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                    })}
                  />
                  {errors.phoneNumber && (
                    <span className='error-msg'>This field is required</span>
                  )}
                </div>
                <div className='col-12'>
                  <label htmlFor='city' className='form-label'>
                    City
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='city'
                    name='city'
                    ref={register({ required: true, maxLength: 70 })}
                  />
                  {errors.city && (
                    <span className='error-msg'>This field is required</span>
                  )}
                </div>
                <div className='col-12'>
                  <label htmlFor='request' className='form-label'>
                    How can we help you?
                  </label>
                  <textarea
                    className='form-control'
                    name='request'
                    id='request'
                    ref={register({ required: true, maxLength: 500 })}
                  />
                  {errors.request && (
                    <span className='error-msg'>This field is required</span>
                  )}
                </div>
                <div className='col-12'>
                  <button
                    type='submit'
                    className='btn btn-lg'
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
