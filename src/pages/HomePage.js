import React from "react";
import Header from "../components/Layout/Header";
import Services from "../components/Layout/Services";
import Newsletter from "../components/Layout/Newsletter";
import Footer from "../components/Layout/Footer";
import "./style.css";
import Sliderbar from "./../components/Layout/Sliderbar";
import CategoriesRandom from "../components/Layout/CategoriesRandom";
import ProductRandom from "../components/Layout/ProductRandom";
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
