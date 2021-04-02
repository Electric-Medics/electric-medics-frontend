import React from 'react';

import './ServicesPage.css';

const ServicesPage: React.FC<{}> = () => {
  return (
    <div className='container-fluid services-page'>
      <div className='col'>
        <div
          className='display-1 my-4 text-center'
          style={{ color: '#F18805' }}
        >
          LOREM IPSUM
        </div>
        <div className='row mb-4' style={{ fontWeight: 300 }}>
          <div className='col-4 offset-md-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className='col-4 offset-md-1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div
          className='display-2 mb-4 offset-md-1'
          style={{ color: '#F18805' }}
        >
          Lorem Ipsum
        </div>
        <div className='row' style={{ fontWeight: 300 }}>
          <div className='col-9 offset-md-1'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
        <div className='row'>
          <div className='col-4 offset-md-1 p-0' style={{ fontWeight: 300 }}>
            <ul className='services-page-list'>
              <li>
                <i className='fas fa-bolt'></i>Lorem Ipsum
              </li>
              <li>
                <i className='fas fa-bolt'></i>Lorem Ipsum
              </li>
              <li>
                <i className='fas fa-bolt'></i>Lorem Ipsum
              </li>
              <li>
                <i className='fas fa-bolt'></i>Lorem Ipsum
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
