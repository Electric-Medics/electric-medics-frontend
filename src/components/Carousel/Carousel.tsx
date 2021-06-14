import React from 'react';
import test from '../../assets/images/homepage-main.jpg';

const Carousel = () => {
  return (
    <>
      <div
        id='carousel'
        className='carousel slide carousel-fade '
        data-bs-ride='carousel'
        data-interval='6000'
        style={{ background: '#0000', maxHeight: '650px' }}
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carousel'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carousel'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carousel'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
        </div>
        <div className='carousel-inner' role='listbox'>
          <div className='carousel-item active'>
            <picture>
              <source srcSet={test} media='(min-width: 1400px)' />
              <source srcSet={test} media='(min-width: 768px)' />
              <source srcSet={test} media='(min-width: 576px)' />
              <img
                srcSet={test}
                alt='responsive'
                className='d-block img-fluid'
                style={{ width: '100%', maxHeight: '650px' }}
              />
            </picture>
          </div>
          <div className='carousel-item'>
            <picture>
              <source
                srcSet='https://www.statece.com/wp-content/uploads/sites/2/2019/06/1-Electrician.jpg'
                media='(min-width: 1400px)'
              />
              <source
                srcSet='https://www.statece.com/wp-content/uploads/sites/2/2019/06/1-Electrician.jpg'
                media='(min-width: 768px)'
              />
              <source
                srcSet='https://www.statece.com/wp-content/uploads/sites/2/2019/06/1-Electrician.jpg'
                media='(min-width: 576px)'
              />
              <img
                srcSet='https://www.statece.com/wp-content/uploads/sites/2/2019/06/1-Electrician.jpg'
                alt='responsive'
                className='d-block img-fluid'
                style={{ width: '100%', maxHeight: '650px' }}
              />
            </picture>
          </div>
          <div className='carousel-item'>
            <picture>
              <source
                srcSet='https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Electrician_Logos_jpg_DhYbEzou.jpg?auto=format&q=60&fit=max&w=930'
                media='(min-width: 1400px)'
              />
              <source
                srcSet='https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Electrician_Logos_jpg_DhYbEzou.jpg?auto=format&q=60&fit=max&w=930'
                media='(min-width: 768px)'
              />
              <source
                srcSet='https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Electrician_Logos_jpg_DhYbEzou.jpg?auto=format&q=60&fit=max&w=930'
                media='(min-width: 576px)'
              />
              <img
                srcSet='https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Electrician_Logos_jpg_DhYbEzou.jpg?auto=format&q=60&fit=max&w=930'
                alt='responsive'
                className='d-block img-fluid'
                style={{ width: '100%', maxHeight: '650px' }}
              />
            </picture>
          </div>
        </div>
        {/* eslint-disable-next-line  */}
        <a
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        {/* eslint-disable-next-line */}
        <a
          className='carousel-control-next'
          type='button'
          data-bs-target='#carousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
