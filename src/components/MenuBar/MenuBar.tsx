import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import './MenuBar.css';

const MenuBar = () => {
  let history = useHistory();
  let location = useLocation();
  const pathname = location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  useEffect(() => {
    setActiveItem(pathname);
    console.log(pathname, activeItem);
  }, [pathname, activeItem]);

  return (
    <div
      className='container-fluid p-0'
      style={{
        minHeight: '64px',
        background: '#F18805',
        WebkitBoxShadow: '0px 0px 5px rgba(50, 50, 50, 0.75)',
        boxShadow: '0px 0px 5px rgba(50, 50, 50, 0.75)',
      }}
    >
      <div className='row'>
        <div className='col-9'>
          <nav
            className='navbar navbar-expand-lg p-0'
            style={{
              background: '#e5e7e9',
              height: '100%',
              minHeight: '64px',
              marginLeft: '25px',
            }}
          >
            <div className='container-fluid'>
              <div className='collapse navbar-collapse d-flex' id='navbarNav'>
                <ul
                  className='navbar-nav d-flex justify-content-evenly'
                  style={{
                    width: '100%',
                    fontSize: '16px',
                    fontFamily: 'Work Sans, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  <li className='nav-link'>
                    <span
                      className='nav-link'
                      style={{
                        color: activeItem === '/' ? '#F18805' : '#1A8FE3',
                      }}
                      onClick={() => {
                        history.push('/');
                      }}
                    >
                      <i className='fas fa-home'></i>HOME
                    </span>
                  </li>
                  <li className='nav-link dropdown'>
                    <span
                      className='nav-link dropdown-toggle'
                      id='navbarDropdown'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                      style={{
                        color:
                          activeItem === '/services' ||
                          activeItem === '/services/'
                            ? '#F18805'
                            : '#1A8FE3',
                      }}
                    >
                      <i className='fas fa-plug'></i>
                      Services
                    </span>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                      style={{
                        background: '#e5e7e9',
                      }}
                    >
                      <li>
                        <a
                          className='dropdown-item'
                          href='/services/#1'
                          style={{
                            background: '#e5e7e9',
                            color:
                              activeItem === '/services' ||
                              activeItem === '/services/'
                                ? '#F18805'
                                : '#1A8FE3',
                          }}
                        >
                          Electrical Service and Installation
                        </a>
                      </li>
                      <li>
                        <a
                          className='dropdown-item'
                          href='/services/#2'
                          style={{
                            background: '#e5e7e9',
                            color:
                              activeItem === '/services' ||
                              activeItem === '/services/'
                                ? '#F18805'
                                : '#1A8FE3',
                          }}
                        >
                          Electrical Repairs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-link'>
                    <span
                      className='nav-link'
                      style={{
                        color:
                          activeItem === '/reviews' ? '#F18805' : '#1A8FE3',
                      }}
                      onClick={() => {
                        history.push('/reviews');
                      }}
                    >
                      <i className='far fa-newspaper'></i>REVIEWS
                    </span>
                  </li>
                  <li className='nav-link'>
                    <span
                      className='nav-link'
                      style={{
                        color:
                          activeItem === '/showroom' ? '#F18805' : '#1A8FE3',
                      }}
                      onClick={() => {
                        history.push('/showroom');
                      }}
                    >
                      <i className='fas fa-person-booth'></i>SHOWROOM
                    </span>
                  </li>
                  <li className='nav-link'>
                    <span
                      className='nav-link'
                      style={{
                        color: activeItem === '/about' ? '#F18805' : '#1A8FE3',
                      }}
                      onClick={() => {
                        history.push('/about');
                      }}
                    >
                      <i className='fas fa-info-circle'></i>ABOUT
                    </span>
                  </li>
                  <li className='nav-link'>
                    <span
                      className='nav-link'
                      style={{
                        color:
                          activeItem === '/careers' ? '#F18805' : '#1A8FE3',
                      }}
                      onClick={() => {
                        history.push('/careers');
                      }}
                    >
                      <i className='fas fa-briefcase'></i>CAREERS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div
          className='col-3 d-flex justify-content-center align-items-center'
          style={{
            color: 'white',
            fontSize: '22px',
            fontFamily: 'Work Sans, sans-serif',
            fontWeight: 400,
          }}
        >
          <a
            href='tel:(949)462-9200'
            style={{
              textDecoration: 'none',
              color: 'white',
              fontSize: '22px',
              fontFamily: 'Work Sans, sans-serif',
              fontWeight: 400,
            }}
          >
            <i
              className='fas fa-phone-alt fa-sm'
              style={{ color: 'white', paddingRight: '5px' }}
            ></i>
            (949) 462-9200
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
