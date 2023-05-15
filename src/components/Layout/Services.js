import React from "react";
import { SERVICES_ARR } from "../../data";
import SeviceItem from "./SeviceItem";

const Services = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center gy-3 align-items-center">
          {SERVICES_ARR.map((sevice, index) => (
            <SeviceItem sevice={sevice} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
