import React from 'react';
import { useHistory } from 'react-router-dom';
import card1 from '../../assets/images/ServiceCard-1.jpg';
import card2 from '../../assets/images/ServiceCard-2.png';

import './ServiceCards.css';

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
      className='container-fluid mt-5'
      style={{ fontFamily: 'Work Sans, sans-serif' }}
    >
      <h1 className='text-center' style={{ fontWeight: 600 }}>
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
      <div className='row justify-content-center'>
        <div className='col-sm-4' style={{ marginRight: '20px' }}>
          <div className='card card-flip h-100'>
            <div className='card-front text-white bg-dark'>
              <img
                src={card1}
                className='card-img-top'
                alt='...'
                style={{ opacity: 0.7 }}
              />
              <div className='card-body' style={{ padding: '0' }}>
                <i className='fa fa-search fa-5x float-right'></i>
                <div
                  className='carousel-caption'
                  style={{ marginBottom: '75px' }}
                >
                  <h3
                    className='card-title'
                    style={{ fontWeight: 400, fontSize: '61px' }}
                  >
                    ELECTRICAL SERVICE <br /> & INSTALLATION
                  </h3>
                </div>
              </div>
            </div>
            <div className='card-back'>
              <div className='card-body'>
                <p
                  className='card-text text-white'
                  style={{ paddingBottom: '5px' }}
                >
                  All electrical service and installations are only done with
                  the best of quality and communication througout the whole
                  process. Whether you need to upgrade your electrical panel or
                  rennovate an entire home project, we guarantee top service.
                </p>
                <ul className='list-group d-flex flex-row flex-wrap'>
                  <li className='list-group-item w-50'>
                    {Checkmark} Light fixture installation
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Ceiling fans
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Electrical Vehicle (EV) Chargers
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Ring / Nest Devices
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Recessed lighting
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Bathroom exhaust fans
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Lighting control
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Electrical panel upgrades
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Dedicated circuits 120 volt or 240 volt
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Added outlets and switches interior and outdoor
                  </li>
                  <li className='list-group-item w-50'>
                    {Checkmark} Smoke and carbon dioxide connectors
                  </li>
                </ul>
                <div
                  className='d-flex justify-content-center'
                  style={{ paddingTop: '25px' }}
                >
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
          </div>
        </div>
        <div className='col-sm-4' style={{ marginLeft: '20px' }}>
          <div className='card card-flip h-100'>
            <div className='card-front text-white bg-warning'>
              <div className='card-body'>
                <i className='fa fa-search-plus fa-5x float-right'></i>
                <h3
                  className='card-title'
                  style={{ fontWeight: 600, fontSize: '30px' }}
                >
                  Electrical Repair
                </h3>
                <p className='card-text'>
                  We handle every common and uncommon residential electrical
                  issue possible. If any emergency power outage or circuit
                  breakers trip, we are here to assist for any Mission Viejo
                  neighbor or those in the surrounding areas.
                </p>
              </div>
            </div>
            <div className='card-back bg-dark text-white'>
              <div className='card-body'>
                <h3 className='card-title'>Back #2</h3>
                <p className='card-text'>
                  Suprise this one has content on the back!
                </p>
                <a href='#' className='btn btn-outline-secondary'>
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
