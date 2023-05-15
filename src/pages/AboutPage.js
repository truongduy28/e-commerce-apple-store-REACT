import React from "react";
import { Header, Footer } from "../components/Layout";
import { CERTIFIED_APPLE_ABOUT } from "./../data/index";

const AboutPage = () => {
  return (
    <div className="page-holder">
      <Header />
      <div className="container text-center">
        <h2 className="text-uppercase">Apple Certificates</h2>
        <ul className="w-75 mx-auto">
          {CERTIFIED_APPLE_ABOUT.map((certificate, index) => (
            <li key={index} className="list-unstyled mt-5">
              <strong>{certificate.name}</strong>
              <p className="mb-0">Issuer: {certificate.issuer}</p>
              <p className="mb-0">Date: {certificate.date}</p>
              <p>{certificate.desc}</p>
              {certificate.img && (
                <img src={certificate.img} alt="..." loading="lazy" />
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
