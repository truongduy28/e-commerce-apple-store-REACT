/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import parse from "html-react-parser";
import { useCartContext } from "../../context/cartContext";
import { showSuccessToast } from "../../services/toast";

const ProductShow = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleAddProductToCart = () => {
    addToCart(product);
    showSuccessToast("Product added successfully!!!");
  };
  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            {/* PRODUCT SLIDER*/}
            <div className="row m-sm-0">
              <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2"></div>
              <div className="col-sm-10 order-1 order-sm-2">
                <div className="swiper product-slider">
                  <div className="swiper-wrapper">
                    <div
                      className="swiper-slide h-auto d-flex justify-content-center align-items-center"
                      style={{ background: "#fff" }}
                    >
                      <a
                        className="glightbox product-view"
                        data-gallery="gallery2"
                        data-glightbox="Product item 1"
                      >
                        <img
                          className="img-fluid"
                          src={product.img}
                          alt="..."
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PRODUCT DETAILS*/}
          <div className="col-lg-6">
            <h1>{product.name}</h1>
            <p className="text-muted lead font-weight-bold text-dark">
              ${String(product.price).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
            </p>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
              ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
              et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
              ultricies aliquam convallis.
            </p>
            <div className="row align-items-stretch mb-4">
              <div
                className="col-sm-3 pl-sm-0 w-50"
                onClick={() => handleAddProductToCart()}
              >
                <a className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0">
                  Add to cart
                </a>
              </div>
            </div>

            <ul className="list-unstyled small d-inline-block">
              <li className="px-3 py-2 mb-1 bg-white">
                <strong className="text-uppercase">CPU:</strong>
                <span className="ms-2 text-muted">{product.cpu}</span>
              </li>
              <li className="px-3 py-2 mb-1 bg-white">
                <strong className="text-uppercase">RAM:</strong>
                <span className="ms-2 text-muted">{product.ram} GB</span>
              </li>
              <li className="px-3 py-2 mb-1 bg-white">
                <strong className="text-uppercase">STORAGE:</strong>
                <span className="ms-2 text-muted">{product.storage} GB</span>
              </li>
            </ul>
          </div>
        </div>
        {/* DETAILS TABS*/}
        <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link text-uppercase active"
              id="description-tab"
              data-bs-toggle="tab"
              href="#description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </a>
          </li>
        </ul>
        <div className="tab-content mb-5" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <div
              className="p-4 p-lg-5 bg-white"
              style={{ overflowX: "hidden" }}
            >
              <h6 className="text-uppercase">Product description </h6>
              <p className="text-muted text-sm mb-0">{parse(product.desc)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShow;
