import React from "react";

const SeviceItem = ({ sevice }) => {
  return (
    <div className="col-lg-4">
      <div className="d-inline-block">
        <div className="d-flex align-items-end">
          <img src={sevice.icon} alt="icon" style={{ width: sevice.width }} />
          <div className="text-start ms-3">
            <h6 className="text-uppercase mb-1">{sevice.text}</h6>
            <p className="text-sm mb-0 text-muted">{sevice.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeviceItem;
