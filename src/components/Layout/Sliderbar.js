/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import banner from "../../assets/img/hero-banner-alt.jpg";

const Sliderbar = () => {
  return (
    <>
      <section
        className="hero pb-3 bg-cover bg-center d-flex align-items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container py-5">
          <div className="row px-4 px-lg-5">
            <div className="col-lg-6">
              <p className="text-muted small text-uppercase mb-2">
                New Inspiration 2020
              </p>
              <h1 className="h2 text-uppercase mb-3">20% off on new season</h1>
              <a className="btn btn-dark" href="#">
                Browse collections
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sliderbar;
