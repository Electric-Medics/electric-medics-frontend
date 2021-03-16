import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ReviewCards.css';

const ReviewCards = () => {
  const [product, setProduct] = useState([]);

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
              return (
                <div
                  className='col-xs-12 col-sm-6 col-md-3 col-lg-3'
                  key={review['id']}
                >
                  <a href=''>
                    <div className='card-flyer'>
                      <div className='text-box'>
                        <div className='image-box'>
                          <img
                            src='https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg'
                            alt=''
                          />
                        </div>
                        <div className='text-container'>
                          <h6>{review['user']['name']}</h6>
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
