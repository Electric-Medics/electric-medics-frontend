import React from 'react';
import { useHistory } from 'react-router-dom';
import card1 from '../../assets/images/ServiceCard-1.png';
import card2 from '../../assets/images/ServiceCard-2.png';

const ServiceCards = () => {
  const history = useHistory();

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
            <h5
              className='card-title'
              style={{ fontWeight: 600, fontSize: '30px' }}
            >
              Electrical Service & Installation
            </h5>
            <p className='card-text'>
              All electrical service and installations are only done with the
              best of quality and communication througout the whole process.
              Whether you need to upgrade your electrical panel or rennovate an
              entire home project, we guarantee top service.
            </p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              {Checkmark} Light fixture installation
            </li>
            <li className='list-group-item'> {Checkmark} Ceiling fans</li>
            <li className='list-group-item'>
              {Checkmark} Electrical Vehicle (EV) Chargers
            </li>
            <li className='list-group-item'>{Checkmark} Ring / Nest Devices</li>
            <li className='list-group-item'>{Checkmark} Recessed lighting</li>
            <li className='list-group-item'>
              {Checkmark} Bathroom exhaust fans
            </li>
            <li className='list-group-item'> {Checkmark} Lighting control</li>
            <li className='list-group-item'>
              {Checkmark} Electrical panel upgrades
            </li>
            <li className='list-group-item'>
              {Checkmark} Dedicated circuits 120 volt or 240 volt
            </li>
            <li className='list-group-item'>
              {Checkmark} Added outlets and switches interior and outdoor
            </li>
            <li className='list-group-item'>
              {Checkmark} Smoke and carbon dioxide connectors
            </li>
          </ul>
          <div className='card-body'>
            <div className='d-flex justify-content-center mt-5'>
              <div>
                <button
                  type='button'
                  className='btn btn-lg btn-primary'
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '21px',
                    letterSpacing: '.5px',
                  }}
                  onClick={() => {
                    history.push('/services');
                  }}
                >
                  Book now!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className='card'
          style={{ width: '18rem', marginTop: '30px', margin: '0 200px' }}
        >
          <img src={card2} className='card-img-top' alt='...' />
          <div className='card-body' style={{ height: '110px' }}>
            <h5
              className='card-title'
              style={{ fontWeight: 600, fontSize: '30px' }}
            >
              Electrical Repair
            </h5>
            <p className='card-text'>
              We handle every common and uncommon residential electrical issue
              possible. If any emergency power outage or circuit breakers trip,
              we are here to assist for any Mission Viejo neighbor or those in
              the surrounding areas.
            </p>
          </div>
          <ul
            className='list-group list-group-flush'
            style={{ marginTop: '85px' }}
          >
            <li className='list-group-item'>
              {Checkmark} Lighting and outlet circuit repair
            </li>
            <li className='list-group-item'>
              {Checkmark} Power outage or issues
            </li>
            <li className='list-group-item'>
              {Checkmark} Circuit breaker issues
            </li>
            <li className='list-group-item'>
              {Checkmark} Aluminum wiring repair
            </li>
            <li className='list-group-item'>
              {Checkmark} Electrical panel repairs
            </li>
            <li className='list-group-item'> {Checkmark} Dimmer replacement</li>
            <li className='list-group-item'>
              {Checkmark} GFCI circuits and devices
            </li>
            <li className='list-group-item'>
              {Checkmark} Electrical troubleshooting/diagnostic
            </li>
            <li className='list-group-item'>
              {Checkmark} Federal Pacific/Zinsco electrical panel repairs
            </li>
          </ul>
          <div className='card-body'>
            <div className='d-flex justify-content-center mt-5'>
              <div>
                <button
                  type='button'
                  className='btn btn-lg btn-primary'
                  style={{
                    fontFamily: 'Work Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '21px',
                    letterSpacing: '.5px',
                    marginTop: '100px',
                  }}
                  onClick={() => {
                    history.push('/services');
                  }}
                >
                  BOOK ONLINE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
