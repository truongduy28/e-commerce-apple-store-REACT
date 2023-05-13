import React from "react";
import services1 from "../../assets/img/delivery-truck-icon.png";
import services2 from "../../assets/img/phone-line-icon.png";
import services3 from "../../assets/img/tag-line-icon.png";
const Services = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center gy-3 align-items-center">
            <div className="col-lg-4">
              <div className="d-inline-block">
                <div className="d-flex align-items-end">
                  <img src={services1} alt="" style={{ width: "80px" }} />
                  <div className="text-start ms-3">
                    <h6 className="text-uppercase mb-1">Free shipping</h6>
                    <p className="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-inline-block">
                <div className="d-flex align-items-end">
                  <img src={services2} alt="" style={{ width: "50px" }} />
                  <div className="text-start ms-3">
                    <h6 className="text-uppercase mb-1">24 x 7 service</h6>
                    <p className="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-inline-block">
                <div className="d-flex align-items-end">
                  <img src={services3} alt="" style={{ width: "50px" }} />
                  <div className="text-start ms-3">
                    <h6 className="text-uppercase mb-1">Festivaloffers</h6>
                    <p className="text-sm mb-0 text-muted">
                      Free shipping worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
