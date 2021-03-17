import React, { useState, useEffect } from 'react';
import axios from 'axios';
import background from '../..//assets/images/homeReviewsBackground.png';

import './ReviewCards.css';

const ReviewCards = () => {
  const [product, setProduct] = useState([]);
  const Star = (
    <svg
      style={{ height: '20px', width: '20px', marginBottom: '5px' }}
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

  const fetchData = async () => {
    await axios
      .get(
        'https://peaceful-wave-86780.herokuapp.com/https://api.yelp.com/v3/businesses/electric-medics-mission-viejo/reviews',
        {
          headers: {
            Authorization: `Bearer XVFbEH6i075av6-df82tScss7YmPqLPLkK2aRlJAPGin_W2RV268E1hQ1SSjHChl135Cmv9HWO2Q2H4amqABF0_MOyvZ5HJ7bge-u5k9mdrj0EzTLm5QcgvhdjFQYHYx`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers':
              'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
          },
        }
      )
      .then((res) => {
        setProduct(res.data.reviews);
        console.log(res.data.reviews);
      })
      .catch((err) => {
        console.log('error');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id='cards_landscape_wrap-2'>
      <div className='container'>
        <div className='row justify-content-center'>
          {product &&
            product.map((review) => {
              const name = review['user']['name'];
              const firstName = name[0];
              let initials: String = '';

              for (let index = 0; index < 10; index++) {
                if (name[index] === ' ') {
                  const lastName = name[index + 1];
                  initials = firstName + '' + lastName;
                  break;
                }
              }
              return (
                <div
                  className='col-xs-12 col-sm-6 col-md-3 col-lg-3'
                  key={review['id']}
                >
                  <a href={review['url']}>
                    <div className='card-flyer'>
                      <div className='text-box'>
                        <div className='text-container'>
                          <h5>
                            <div className='avatar'>{initials}</div>
                            <div
                              className='reviewer-name'
                              style={{ paddingLeft: '10px' }}
                            >
                              {review['user']['name']}
                              <div
                                className='reviewer-time'
                                style={{
                                  fontWeight: 300,
                                  fontSize: '14px',
                                  lineHeight: '20px',
                                  color: 'lightgray',
                                }}
                              >
                                {review['time_created']}
                              </div>
                            </div>
                          </h5>
                          <div
                            className='d-flex justify-content-left'
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
                          <p>{review['text']}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
