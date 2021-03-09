import React from 'react';
import { useHistory } from 'react-router-dom';

import background from '../assets/images/homeReviewsBackground.png';

const HomeReviews = () => {
  const history = useHistory();
  const Star = (
    <svg
      style={{ height: '40px', width: '40px', margin: '0 2px 20px' }}
      version='1.1'
      id='Capa_1'
      enableBackground='new 0 0 512 512'
      x='0px'
      y='0px'
      viewBox='0 0 512 512'
    >
      <g>
        <g>
          <path
            style={{ fill: '#FFD400' }}
            d='M512,197.651L326,185.65L255.8,9.55l-70.201,176.1L0,197.651L142.399,318.85l-46.8,183.6
        L255.8,401.05L416,502.45l-46.8-183.6L512,197.651z'
          />
          <polygon
            style={{ fill: '#FDBF00' }}
            points='369.2,318.85 416,502.45 255.8,401.05 255.8,9.55 326,185.65 512,197.651 '
          />
        </g>
      </g>
    </svg>
  );

  return (
    <div
      style={{
        background: 'linear-gradient(to top left, #808080 0%, #000000 100%)',
      }}
    >
      <div
        className='container-fluid p-5'
        style={{
          background: `url(${background}) no-repeat center center /cover`,
          height: '450px',
        }}
      >
        <div
          className='d-flex justify-content-center'
          style={{ color: 'white' }}
        >
          <div>
            {Star}
            {Star}
            {Star}
            {Star}
            {Star}
          </div>
        </div>
        <h1
          className='text-center'
          style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 600,
            marginTop: '40px',
            marginBottom: '10px',
            color: 'white',
          }}
        >
          "Finally after 50 years of dealing with electricians, I found one that
          deserved a 5 star review and I will use in the future for other
          electrical projects. Give Electric Medics a call. You won't be
          disappointed."
        </h1>
        <h2
          className='text-center'
          style={{
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 300,
            fontSize: '25px',
            marginBottom: '20px',
            color: 'white',
          }}
        >
          - Wayne Gretzy Michael Scott
        </h2>
        <div className='d-flex justify-content-center mt-5'>
          <div>
            <button
              type='button'
              className='btn btn-lg'
              style={{
                borderColor: 'black',
                borderWidth: '2.5px',
                backgroundColor: '#F18805',
                color: 'black',
                fontFamily: 'Work Sans, sans-serif',
                fontWeight: 300,
                fontSize: '21px',
                letterSpacing: '0.5px',
              }}
              onClick={() => {
                history.push('/reviews');
              }}
            >
              Read more reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReviews;
