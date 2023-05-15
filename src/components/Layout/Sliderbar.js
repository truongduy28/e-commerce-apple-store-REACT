import React from "react";
import { Link } from "react-router-dom";
import { BANNER_DATA } from "../../data";

const Sliderbar = () => {
  const { img, smallText, mainText, btnText, route } = BANNER_DATA;
  return (
    <section
      className="hero pb-3 bg-cover d-flex align-items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container py-5">
        <div className="row px-4 px-lg-5">
          <div className="col-lg-6">
            <p className="text-muted small text-uppercase mb-2 text-white">
              {smallText}
            </p>
            <h1 className="h2 text-uppercase mb-3 text-white">{mainText} </h1>
            <Link className="btn btn-dark" to={route}>
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sliderbar;
