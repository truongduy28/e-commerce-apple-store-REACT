/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import banner from "../../assets/img/hero-banner-alt.jpg";
import { Link } from "react-router-dom";

const Sliderbar = () => {
  return (
    <>
      <section
        className="hero pb-3 bg-cover  d-flex align-items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1571599164516-bacd34e651f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80 )`,
        }}
      >
        <div className="container py-5">
          <div className="row px-4 px-lg-5">
            <div className="col-lg-6">
              <p className="text-muted small text-uppercase mb-2 text-white">
                New Inspiration 2023
              </p>
              <h1 className="h2 text-uppercase mb-3 text-white">
                fast and convenient
              </h1>
              <Link className="btn btn-dark" to="/products">
                Browse collections
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sliderbar;
