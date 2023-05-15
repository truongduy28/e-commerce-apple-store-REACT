/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FOOTER_ARR, RIGHTS } from "../../data";
import FooterCol from "../Materials/FooterCol";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4">
        <div className="row py-5">
          {FOOTER_ARR.map((footerItem, index) => (
            <FooterCol key={index} footerItem={footerItem} />
          ))}
        </div>
        <div
          className="border-top pt-4"
          style={{ borderColor: "#1d1d1d !important" }}
        >
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="small text-muted mb-0">{RIGHTS.rights}</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="small text-muted mb-0">
                {RIGHTS.introduce}
                <a className="text-white reset-anchor ml-2" href="#">
                  {RIGHTS.author}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
