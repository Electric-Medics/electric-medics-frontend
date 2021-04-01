import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  workHistory: string;
  skill: string;
  availability: string;
  salary: string;
  military: string;
};

const EmploymentForm = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = (data) => {
    for (const key in data) {
      data[key] = data[key].trim();
    }
  };

  return (
    <div className='container-fluid px-0 m-0 mb-5'>
      <h1
        className='col-12 text-center mb-3'
        style={{
          fontFamily: 'Work Sans, sans-serif',
          fontWeight: 300,
          color: 'black',
          fontSize: '30px',
          maxHeight: '600px',
          background: '#728496',
          padding: '3% 15% 3% 15%',
        }}
      >
        We have openings for Service Electricians and Electrician
        Apprentice/Helpers! To apply, fill out the form below and click on the
        "Apply Now" button. Then, send your resume to
        <a href='mailto:electricmedics@gmail.com?subject=Application'>
          {''} electricmedics@gmail.com.
        </a>
      </h1>
      <div className='col-8 offset-md-2'>
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
              style={{ minHeight: '500px' }}
            >
              <div className='col-md-6 mb-2'>
                <label htmlFor='name'>Full Name:</label>
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
              <div className='col-md-6 mb-2'>
                <label htmlFor='email'>Email:</label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  id='inputEmail'
                  ref={register({
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.email ? (
                  errors.email.type === 'pattern' ? (
                    <span className='error-msg'>
                      Please enter a valid email.
                    </span>
                  ) : (
                    <span className='error-msg'>This field is required</span>
                  )
                ) : null}
              </div>
              <div className='col-md-6 mb-2'>
                <label htmlFor='phoneNumber'>Phone:</label>
                <input
                  type='tel'
                  name='phoneNumber'
                  className='form-control'
                  id='inputPhoneNumber'
                  ref={register({
                    required: true,
                    pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  })}
                />
                {errors.phoneNumber ? (
                  errors.phoneNumber.type === 'pattern' ? (
                    <span className='error-msg'>
                      Please enter a valid phone number.
                    </span>
                  ) : (
                    <span className='error-msg'>This field is required</span>
                  )
                ) : null}
              </div>
              <div className='col-md-6 mb-2'>
                <label htmlFor='address'>Address:</label>
                <input
                  type='text'
                  className='form-control'
                  id='address'
                  name='address'
                  ref={register({ required: true, maxLength: 200 })}
                />
                {errors.address && (
                  <span className='error-msg'>This field is required</span>
                )}
              </div>
              <div className='col-md-6 mb-2'>
                <label htmlFor='workHistory'>
                  Brief work history as it pertains to the electrical trade:
                </label>
                <textarea
                  className='form-control'
                  name='workHistory'
                  id='workHistory'
                  ref={register({ required: true })}
                />
                {errors.workHistory && (
                  <span className='error-msg'>This field is required</span>
                )}
              </div>
              <div className='col-md-6 mb-2'>
                <label htmlFor='skill'>
                  Describe your skill level in residential service,repair and
                  new construction:
                </label>
                <textarea
                  className='form-control'
                  name='skill'
                  id='skill'
                  ref={register({ required: true })}
                />
                {errors.skill && (
                  <span className='error-msg'>This field is required</span>
                )}
              </div>
              <div className='col-md-6 mb-2'>
                <label htmlFor='availability'>What is your availability:</label>
                <textarea
                  className='form-control'
                  name='availability'
                  id='availability'
                  ref={register({ required: true })}
                />
                {errors.availability && (
                  <span className='error-msg'>This field is required</span>
                )}
              </div>
              <div className='col-md-6 mb-2'>
                <label htmlFor='salary'>Desired Salary:</label>
                <textarea
                  className='form-control'
                  name='salary'
                  id='salary'
                  ref={register({ required: true })}
                />
                {errors.salary && (
                  <span className='error-msg'>This field is required</span>
                )}
              </div>
              <div className='col-md-12'>
                <label htmlFor='military'>
                  Prior Military? (If yes, included your brand and discharge
                  date):
                </label>
                <textarea
                  className='form-control'
                  name='military'
                  id='military'
                  ref={register({ required: true })}
                />
                {errors.military && (
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
                    width: '50%',
                  }}
                >
                  APPLY NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentForm;
