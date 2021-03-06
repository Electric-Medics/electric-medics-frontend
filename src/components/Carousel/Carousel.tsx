import React from "react";
import test from "../../assets/images/homepage-main.jpg";

import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div
        id="carousel"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
        data-interval="6000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <picture>
              <source srcSet={test} media="(min-width: 1400px)" />
              <source srcSet={test} media="(min-width: 769px)" />
              <source srcSet={test} media="(min-width: 577px)" />
              <img
                srcSet={test}
                alt="responsive"
                className="d-block img-fluid"
              />
            </picture>

            <div className="carousel-caption">
              <div>
                <h2>Digital Craftsmanship</h2>
                <p>We meticously build each site to get results</p>
                <span className="btn btn-sm btn-outline-secondary">
                  Learn More
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <picture>
              <source
                srcSet="https://www.statece.com/wp-content/uploads/sites/2/2019/06/1-Electrician.jpg"
                media="(min-width: 1400px)"
              />
              <source
                srcSet="https://www.statece.com/wp-content/uploads/sites/2/2019/06/1-Electrician.jpg"
                media="(min-width: 769px)"
              />
              <source
                srcSet="https://www.statece.com/wp-content/uploads/sites/2/2019/06/1-Electrician.jpg"
                media="(min-width: 577px)"
              />
              <img
                srcSet="https://www.statece.com/wp-content/uploads/sites/2/2019/06/1-Electrician.jpg"
                alt="responsive"
                className="d-block img-fluid"
              />
            </picture>

            <div className="carousel-caption justify-content-center align-items-center">
              <div>
                <h2>Every project begins with a sketch</h2>
                <p>
                  We work as an extension of your business to explore solutions
                </p>
                <span className="btn btn-sm btn-outline-secondary">
                  Our Process
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <picture>
              <source
                srcSet="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Electrician_Logos_jpg_DhYbEzou.jpg?auto=format&q=60&fit=max&w=930"
                media="(min-width: 1400px)"
              />
              <source
                srcSet="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Electrician_Logos_jpg_DhYbEzou.jpg?auto=format&q=60&fit=max&w=930"
                media="(min-width: 769px)"
              />
              <source
                srcSet="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Electrician_Logos_jpg_DhYbEzou.jpg?auto=format&q=60&fit=max&w=930"
                media="(min-width: 577px)"
              />
              <img
                srcSet="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/08/Electrician_Logos_jpg_DhYbEzou.jpg?auto=format&q=60&fit=max&w=930"
                alt="responsive"
                className="d-block img-fluid"
              />
            </picture>

            <div className="carousel-caption justify-content-center align-items-center">
              <div>
                <h2>Performance Optimization</h2>
                <p>We monitor and optimize your site's long-term performance</p>
                <span className="btn btn-sm btn-secondary">Learn How</span>
              </div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line  */}
        <a
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        {/* eslint-disable-next-line */}
        <a
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
