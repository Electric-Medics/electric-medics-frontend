import React, { useState, useEffect } from 'react';

import './ReviewCards.css';

const ReviewCards = () => {
  const [yelpProduct, setYelpProduct] = useState([]);
  const [facebookProduct, setFacebookProduct] = useState([]);
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

  const fetchFacebookData = async () => {
    const response = await fetch('http://localhost:1234/getFacebookReviews');
    const data = await response.json();
    setFacebookProduct(data.data);
  };

  const fetchYelpData = async () => {
    const response = await fetch('http://localhost:1234/getYelpReviews');
    const data = await response.json();
    setYelpProduct(data.reviews);
  };

  useEffect(() => {
    fetchYelpData();
    fetchFacebookData();
  }, []);

  return (
    <div
      className='container-fluid'
      style={{ background: '#275C7A', textAlign: 'center' }}
    >
      <div
        className='text-center display-1'
        style={{ fontWeight: 500, paddingTop: '25px', color: '#FFEF38' }}
      >
        What Our Customers Say
      </div>
      <div id='cards_landscape_wrap-2'>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            {yelpProduct &&
              yelpProduct.map((review) => {
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
                              <i
                                className='fab fa-yelp'
                                style={{ color: 'red', paddingLeft: '250px' }}
                              ></i>
                            </div>
                            <p>{review['text']}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            {facebookProduct &&
              facebookProduct.map((review) => {
                return (
                  <div
                    className='col-xs-12 col-sm-6 col-md-3 col-lg-3'
                    key={review['created_time']}
                  >
                    <a href='https://www.facebook.com/electricmedics/reviews'>
                      <div className='card-flyer'>
                        <div className='text-box'>
                          <div className='text-container'>
                            <h5>
                              <div className='avatar'>FR</div>
                              <div
                                className='reviewer-name'
                                style={{ paddingLeft: '10px' }}
                              >
                                Facebook Reviewer
                                <div
                                  className='reviewer-time'
                                  style={{
                                    fontWeight: 300,
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    color: 'lightgray',
                                  }}
                                >
                                  {review['created_time']}
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
                              <i
                                className='fab fa-facebook'
                                style={{ color: 'blue', paddingLeft: '248px' }}
                              ></i>
                            </div>
                            <p>{review['review_text']}</p>
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
    </div>
  );
};

export default ReviewCards;
