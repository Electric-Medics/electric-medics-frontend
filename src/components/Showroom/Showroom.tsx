import React from 'react';

import './Showroom.css';

const ShowroomCards = () => {
  return (
    <>
      <div className='container-fluid mt-5'>
        <h1
          style={{
            fontWeight: 500,
            fontFamily: 'Work Sans, sans-serif',
            textAlign: 'center',
            marginBottom: '30px',
            fontSize: '65px',
          }}
        >
          Our Work Gallery
        </h1>

        <div
          className='container-fluid mb-5'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            className='row row-cols-2'
            id='gallery'
            data-bs-toggle='modal'
            data-bs-target='#showroomModal'
          >
            <div className='col-12 col-sm-6 col-lg-3 mb-5'>
              <img
                className='w-100'
                src='https://images.unsplash.com/photo-1546853020-ca4909aef454?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                alt='First slide'
                data-bs-target='#carousel'
                data-bs-slide-to='0'
              />
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-5'>
              <img
                className='w-100'
                src='https://images.unsplash.com/photo-1594843434421-23fe23f36ae9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
                alt='First slide'
                data-bs-target='#carousel'
                data-bs-slide-to='1'
              />
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-5'>
              <img
                className='w-100'
                src='https://images.unsplash.com/photo-1616379651857-5e05d7429f01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                alt='First slide'
                data-bs-target='#carousel'
                data-bs-slide-to='2'
              />
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-5'>
              <img
                className='w-100'
                src='https://images.unsplash.com/photo-1529775923196-6c345da7cd84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                alt='First slide'
                data-bs-target='#carousel'
                data-bs-slide-to='3'
              />
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-5'>
              <img
                className='w-100'
                src='https://images.unsplash.com/photo-1616907774883-bf0e30b5b644?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='First slide'
                data-bs-target='#carousel'
                data-bs-slide-to='0'
              />
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-5'>
              <img
                className='w-100'
                src='https://images.unsplash.com/photo-1579733149724-3ddd10273921?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                alt='First slide'
                data-bs-target='#carousel'
                data-bs-slide-to='1'
              />
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-5'>
              <img
                className='w-100'
                src='https://images.unsplash.com/photo-1617089398993-eb8eaa0ecf9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
                alt='First slide'
                data-bs-target='#carousel'
                data-bs-slide-to='2'
              />
            </div>
            <div className='col-12 col-sm-6 col-lg-3 mb-5'>
              <img
                className='w-100'
                src='https://images.unsplash.com/photo-1617167152074-821b4f8af3d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
                alt='First slide'
                data-bs-target='#carousel'
                data-bs-slide-to='3'
              />
            </div>
          </div>
          <div
            className='modal fade'
            id='showroomModal'
            tabIndex={-1}
            role='dialog'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-lg' role='document'>
              <div className='modal-content'>
                <div className='modal-body'>
                  <div
                    id='carousel'
                    className='carousel slide'
                    data-bs-ride='carousel'
                  >
                    <ol className='carousel-indicators'>
                      <li
                        data-bs-target='#carousel'
                        data-bs-slide-to='0'
                        className='active'
                      ></li>
                      <li data-bs-target='#carousel' data-bs-slide-to='1'></li>
                      <li data-bs-target='#carousel' data-bs-slide-to='2'></li>
                      <li data-bs-target='#carousel' data-bs-slide-to='3'></li>
                      <li data-bs-target='#carousel' data-bs-slide-to='4'></li>
                      <li data-bs-target='#carousel' data-bs-slide-to='5'></li>
                      <li data-bs-target='#carousel' data-bs-slide-to='6'></li>
                      <li data-bs-target='#carousel' data-bs-slide-to='7'></li>
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
                          src='https://images.unsplash.com/photo-1594843434421-23fe23f36ae9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
                          alt='Second slide'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          className='d-block w-100'
                          src='https://images.unsplash.com/photo-1616379651857-5e05d7429f01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                          alt='Third slide'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          className='d-block w-100'
                          src='https://images.unsplash.com/photo-1529775923196-6c345da7cd84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                          alt='Fourth slide'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          className='d-block w-100'
                          src='https://images.unsplash.com/photo-1616907774883-bf0e30b5b644?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                          alt='Fifth slide'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          className='d-block w-100'
                          src='https://images.unsplash.com/photo-1579733149724-3ddd10273921?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                          alt='Sixth slide'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          className='d-block w-100'
                          src='https://images.unsplash.com/photo-1617089398993-eb8eaa0ecf9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'
                          alt='Seventh slide'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          className='d-block w-100'
                          src='https://images.unsplash.com/photo-1617167152074-821b4f8af3d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
                          alt='Eighth slide'
                        />
                      </div>
                    </div>
                    <a
                      className='carousel-control-prev'
                      href='#carousel'
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
                      href='#carousel'
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
      </div>
    </>
  );
};

export default ShowroomCards;
