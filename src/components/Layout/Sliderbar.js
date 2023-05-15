import React from "react";
import { Link } from "react-router-dom";

const Sliderbar = () => {
  return (
    <section
      className="hero pb-3 bg-cover d-flex align-items-center"
      style={{
        backgroundImage: `url(./images/banner.jpg)`,
      }}
    >
      <div className="container py-5">
        <div className="row px-4 px-lg-5">
          <div className="col-lg-6">
            <p className="text-muted small text-uppercase mb-2 text-white">
              New Inspiration 2023
            </p>
            <h1 className="h2 text-uppercase mb-3 text-white">
              Fast and Convenient
            </h1>
            <Link className="btn btn-dark" to="/products">
              Browse Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sliderbar;
