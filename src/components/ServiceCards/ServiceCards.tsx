import React from 'react';
import card1 from '../../assets/images/ServiceCard-1.png';
import card2 from '../../assets/images/ServiceCard-2.png';

const ServiceCards = () => {
  const Checkmark = (
    <svg
      style={{ height: '20px', width: '20px' }}
      id='Layer_1'
      x='0px'
      y='0px'
      viewBox='0 0 32 32'
      enableBackground='new 0 0 32 32'
    >
      <circle fill='#0054FF' cx='16' cy='15.9' r='15.8'></circle>
      <polygon
        fill='#FFFFFF'
        points='23,9 13.2,18.8 9,14.5 6.4,17 10.7,21.3 13.2,23.8 15.8,21.3 25.6,11.5 '
      ></polygon>
    </svg>
  );

  return (
    <div
      className='container-fluid p-5'
      style={{ background: '#f5f5f5', fontFamily: 'Work Sans, sans-serif' }}
    >
      <h1 className='text-center pb-2' style={{ fontWeight: 600 }}>
        Our Electrical Services
      </h1>
      <p
        style={{
          fontWeight: 400,
          fontSize: '20px',
          margin: '20px 250px',
          marginBottom: '50px',
        }}
      >
        If you need repairs, service, or installation, Electric Medics can do it
        quickly, affordably, and by providing you with that small-team level of
        care and customer service. Work with professional electricians who stand
        by their work: we’re licensed electricians in the state of California,
        and we offer a 1 year parts and labor warranty for our electrical
        services.
      </p>
      <div className='card-group'>
        <div
          className='card'
          style={{ width: '18rem', marginTop: '30px', margin: '0 200px' }}
        >
          <img src={card1} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Electrical Service & Installation</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'> {Checkmark} Light fixture installation</li>
            <li className='list-group-item'> {Checkmark} Ceiling fans</li>
            <li className='list-group-item'> {Checkmark} Electrical Vehicle (EV) Chargers</li>
          </ul>
          <div className='card-body'>
            <a href='#' className='card-link'>
              Card link
            </a>
            <a href='#' className='card-link'>
              Another link
            </a>
          </div>
        </div>
        <div
          className='card'
          style={{ width: '18rem', marginTop: '30px', margin: '0 200px' }}
        >
          <img src={card2} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Electrical Repair</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'> {Checkmark} Lighting and outlet circuit repair</li>
            <li className='list-group-item'> {Checkmark} Power outage or issues</li>
            <li className='list-group-item'> {Checkmark} Electrical panel repairs</li>
          </ul>
          <div className='card-body'>
            <a href='#' className='card-link'>
              Card link
            </a>
            <a href='#' className='card-link'>
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
