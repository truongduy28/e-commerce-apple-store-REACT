import React from "react";
import "./style.css";
import {
  Header,
  Footer,
  CategoriesRandom,
  Sliderbar,
  ProductRandom,
  Services,
  Newsletter,
} from "../components/Layout";

const HomePage = () => {
  return (
    <div className="page-holder">
      <Header />
      <div className="container py-0">
        <Sliderbar />
        <CategoriesRandom />
        <ProductRandom />
        <Services />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
