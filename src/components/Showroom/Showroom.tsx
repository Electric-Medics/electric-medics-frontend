import React from 'react';

import './Showroom.css';

const ShowroomCards = () => {
  return (
    <div className='container-fluid mt-5' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div
        className='row'
        id='gallery'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'
      >
        <div className='col-12 col-sm-6 col-lg-3'>
          <img
            className='w-100'
            src='https://images.unsplash.com/photo-1546853020-ca4909aef454?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
            alt='First slide'
            data-bs-target='#carouselExample'
            data-bs-slide-to='0'
          />
        </div>
        <div className='col-12 col-sm-6 col-lg-3'>
          <img
            className='w-100'
            src='https://images.unsplash.com/photo-1546534505-d534e27ecb35?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
            alt='First slide'
            data-bs-target='#carouselExample'
            data-bs-slide-to='1'
          />
        </div>
        <div className='col-12 col-sm-6 col-lg-3'>
          <img
            className='w-100'
            src='https://images.unsplash.com/photo-1546111380-cfca9a43dd85?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
            alt='First slide'
            data-bs-target='#carouselExample'
            data-bs-slide-to='2'
          />
        </div>
        <div className='col-12 col-sm-6 col-lg-3'>
          <img
            className='w-100'
            src='https://images.unsplash.com/photo-1547288242-f3d375fc7b5f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
            alt='First slide'
            data-bs-target='#carouselExample'
            data-bs-slide-to='3'
          />
        </div>
      </div>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex={-1}
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='close'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <div
                id='carouselExample'
                className='carousel slide'
                data-bs-ride='carousel'
              >
                <ol className='carousel-indicators'>
                  <li
                    data-bs-target='#carouselExample'
                    data-bs-slide-to='0'
                    className='active'
                  ></li>
                  <li
                    data-bs-target='#carouselExample'
                    data-bs-slide-to='1'
                  ></li>
                  <li
                    data-bs-target='#carouselExample'
                    data-bs-slide-to='2'
                  ></li>
                  <li
                    data-bs-target='#carouselExample'
                    data-bs-slide-to='3'
                  ></li>
                </ol>
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <img
                      className='d-block w-100'
                      src='https://images.unsplash.com/photo-1546853020-ca4909aef454?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                      alt='First slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block w-100'
                      src='https://images.unsplash.com/photo-1546534505-d534e27ecb35?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                      alt='Second slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block w-100'
                      src='https://images.unsplash.com/photo-1546111380-cfca9a43dd85?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                      alt='Third slide'
                    />
                  </div>
                  <div className='carousel-item'>
                    <img
                      className='d-block w-100'
                      src='https://images.unsplash.com/photo-1547288242-f3d375fc7b5f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                      alt='Fourth slide'
                    />
                  </div>
                </div>
                <a
                  className='carousel-control-prev'
                  href='#carouselExample'
                  role='button'
                  data-bs-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='sr-only'>Previous</span>
                </a>
                <a
                  className='carousel-control-next'
                  href='#carouselExample'
                  role='button'
                  data-bs-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  ></span>
                  <span className='sr-only'>Next</span>
                </a>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowroomCards;
