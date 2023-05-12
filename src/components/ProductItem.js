import React from "react";
import { AiOutlineHeart, AiOutlineExpand } from "react-icons/ai";
import product1 from "../assets/img/product-1.jpg";
import product2 from "../assets/img/product-2.jpg";
import product3 from "../assets/img/product-3.jpg";
import product4 from "../assets/img/product-4.jpg";
import product5 from "../assets/img/product-5.jpg";
const ProductItemOld = () => {
  return (
    <>
      <div className="row">
        {/* PRODUCT*/}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white bg-" />
              <a className="d-block" href="detail.html">
                <img className="img-fluid w-100" src={product1} alt="..." />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-outline-dark" href="#!">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-dark" href="cart.html">
                      Add to cart
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <AiOutlineExpand />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a className="reset-anchor text-secondary" href="detail.html">
                Kui Ye Chen’s AirPods
              </a>
            </h6>
            <p className="small text-muted">$250</p>
          </div>
        </div>
        {/* PRODUCT*/}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white bg-primary">Sale</div>
              <a className="d-block" href="detail.html">
                <img className="img-fluid w-100" src={product2} alt="..." />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-outline-dark" href="#!">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-dark" href="cart.html">
                      Add to cart
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <AiOutlineExpand />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a className="reset-anchor text-secondary" href="detail.html">
                Air Jordan 12 gym red
              </a>
            </h6>
            <p className="small text-muted">$300</p>
          </div>
        </div>
        {/* PRODUCT*/}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white bg-" />
              <a className="d-block" href="detail.html">
                <img className="img-fluid w-100" src={product3} alt="..." />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-outline-dark" href="#!">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-dark" href="cart.html">
                      Add to cart
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <AiOutlineExpand />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a className="reset-anchor text-secondary" href="detail.html">
                Cyan cotton t-shirt
              </a>
            </h6>
            <p className="small text-muted">$25</p>
          </div>
        </div>
        {/* PRODUCT*/}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white bg-info">New</div>
              <a className="d-block" href="detail.html">
                <img className="img-fluid w-100" src={product4} alt="..." />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-outline-dark" href="#!">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-dark" href="cart.html">
                      Add to cart
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <AiOutlineExpand />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a className="reset-anchor text-secondary" href="detail.html">
                Timex Unisex Originals
              </a>
            </h6>
            <p className="small text-muted">$351</p>
          </div>
        </div>
        {/* PRODUCT*/}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white bg-danger">Sold</div>
              <a className="d-block" href="detail.html">
                <img className="img-fluid w-100" src={product5} alt="..." />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-outline-dark" href="#!">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-dark" href="cart.html">
                      Add to cart
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <AiOutlineExpand />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a className="reset-anchor text-secondary" href="detail.html">
                Red digital smartwatch
              </a>
            </h6>
            <p className="small text-muted">$250</p>
          </div>
        </div>
        {/* PRODUCT*/}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white bg-" />
              <a className="d-block" href="detail.html">
                <img className="img-fluid w-100" src={product5} alt="..." />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-outline-dark" href="#!">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-dark" href="cart.html">
                      Add to cart
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <AiOutlineExpand />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a className="reset-anchor text-secondary" href="detail.html">
                Nike air max 95
              </a>
            </h6>
            <p className="small text-muted">$300</p>
          </div>
        </div>
        {/* PRODUCT*/}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white bg-" />
              <a className="d-block" href="detail.html">
                <img className="img-fluid w-100" src={product5} alt="..." />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-outline-dark" href="#!">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-dark" href="cart.html">
                      Add to cart
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <AiOutlineExpand />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a className="reset-anchor text-secondary" href="detail.html">
                Joemalone Women prefume
              </a>
            </h6>
            <p className="small text-muted">$25</p>
          </div>
        </div>
        {/* PRODUCT*/}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white bg-" />
              <a className="d-block" href="detail.html">
                <img className="img-fluid w-100" src={product5} alt="..." />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-outline-dark" href="#!">
                      <AiOutlineHeart />
                    </a>
                  </li>
                  <li className="list-inline-item m-0 p-0">
                    <a className="btn btn-sm btn-dark" href="cart.html">
                      Add to cart
                    </a>
                  </li>
                  <li className="list-inline-item me-0">
                    <a
                      className="btn btn-sm btn-outline-dark"
                      href="#productView"
                      data-bs-toggle="modal"
                    >
                      <AiOutlineExpand />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a className="reset-anchor text-secondary" href="detail.html">
                Apple Watch
              </a>
            </h6>
            <p className="small text-muted">$351</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItemOld;
