/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
// import product5 from "../assets/img/product-5.jpg";
import product1 from "../assets/img/product-detail-1.jpg";
import product2 from "../assets/img/product-detail-2.jpg";
import product3 from "../assets/img/product-detail-3.jpg";
import product4 from "../assets/img/product-detail-4.jpg";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  return (
    <>
      <div className="modal fade" id="productView" tabIndex={-1}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content overflow-hidden border-0">
            <button
              className="btn-close p-4 position-absolute top-0 end-0 z-index-20 shadow-0"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
            <div className="modal-body p-0">
              <div className="row align-items-stretch">
                <div className="col-lg-6 p-lg-0">
                  <a
                    className="glightbox product-view d-block h-100 bg-cover bg-center"
                    style={{ background: "url(img/product-5.jpg)" }}
                    href="img/product-5.jpg"
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  />
                  <a
                    className="glightbox d-none"
                    href="img/product-5-alt-1.jpg"
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  />
                  <a
                    className="glightbox d-none"
                    href="img/product-5-alt-2.jpg"
                    data-gallery="gallery1"
                    data-glightbox="Red digital smartwatch"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="p-4 my-md-4">
                    <ul className="list-inline mb-2">
                      <li className="list-inline-item m-0">
                        <i className="fas fa-star small text-warning" />
                      </li>
                      <li className="list-inline-item m-0 1">
                        <i className="fas fa-star small text-warning" />
                      </li>
                      <li className="list-inline-item m-0 2">
                        <i className="fas fa-star small text-warning" />
                      </li>
                      <li className="list-inline-item m-0 3">
                        <i className="fas fa-star small text-warning" />
                      </li>
                      <li className="list-inline-item m-0 4">
                        <i className="fas fa-star small text-warning" />
                      </li>
                    </ul>
                    <h2 className="h4">Red digital smartwatch</h2>
                    <p className="text-muted">$250</p>
                    <p className="text-sm mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In ut ullamcorper leo, eget euismod orci. Cum sociis
                      natoque penatibus et magnis dis parturient montes nascetur
                      ridiculus mus. Vestibulum ultricies aliquam convallis.
                    </p>
                    <div className="row align-items-stretch mb-4 gx-0">
                      <div className="col-sm-7">
                        <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                          <span className="small text-uppercase text-gray mr-4 no-select">
                            Quantity
                          </span>
                          <div className="quantity">
                            <button className="dec-btn p-0">
                              <GrCaretPrevious />
                            </button>
                            <input
                              className="form-control border-0 shadow-0 p-0"
                              type="text"
                              defaultValue={1}
                            />
                            <button className="inc-btn p-0">
                              <GrCaretNext />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <a
                          className="btn btn-dark btn-sm w-100 h-100 d-flex align-items-center justify-content-center px-0"
                          href="cart.html"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                    <a
                      className="btn btn-link text-dark text-decoration-none p-0"
                      href="#!"
                    >
                      <i className="far fa-heart me-2" />
                      Add to wish list
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              {/* PRODUCT SLIDER*/}
              <div className="row m-sm-0">
                <div className="col-sm-2 p-sm-0 order-2 order-sm-1 mt-2 mt-sm-0 px-xl-2">
                  <div className="swiper product-slider-thumbs">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                        <img className="w-100" src={product1} alt="..." />
                      </div>
                      <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                        <img className="w-100" src={product2} alt="..." />
                      </div>
                      <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                        <img className="w-100" src={product3} alt="..." />
                      </div>
                      <div className="swiper-slide h-auto swiper-thumb-item mb-3">
                        <img className="w-100" src={product4} alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-10 order-1 order-sm-2">
                  <div className="swiper product-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide h-auto">
                        <a
                          className="glightbox product-view"
                          href="img/product-detail-1.jpg"
                          data-gallery="gallery2"
                          data-glightbox="Product item 1"
                        >
                          <img className="img-fluid" src={product1} alt="..." />
                        </a>
                      </div>
                      <div className="swiper-slide h-auto">
                        <a
                          className="glightbox product-view"
                          href="img/product-detail-2.jpg"
                          data-gallery="gallery2"
                          data-glightbox="Product item 2"
                        >
                          <img className="img-fluid" src={product2} alt="..." />
                        </a>
                      </div>
                      <div className="swiper-slide h-auto">
                        <a
                          className="glightbox product-view"
                          href="img/product-detail-3.jpg"
                          data-gallery="gallery2"
                          data-glightbox="Product item 3"
                        >
                          <img className="img-fluid" src={product3} alt="..." />
                        </a>
                      </div>
                      <div className="swiper-slide h-auto">
                        <a
                          className="glightbox product-view"
                          href="img/product-detail-4.jpg"
                          data-gallery="gallery2"
                          data-glightbox="Product item 4"
                        >
                          <img className="img-fluid" src={product4} alt="..." />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PRODUCT DETAILS*/}
            <div className="col-lg-6">
              <ul className="list-inline mb-2 text-sm">
                <li className="list-inline-item m-0">
                  <i className="fas fa-star small text-warning" />
                </li>
                <li className="list-inline-item m-0 1">
                  <i className="fas fa-star small text-warning" />
                </li>
                <li className="list-inline-item m-0 2">
                  <i className="fas fa-star small text-warning" />
                </li>
                <li className="list-inline-item m-0 3">
                  <i className="fas fa-star small text-warning" />
                </li>
                <li className="list-inline-item m-0 4">
                  <i className="fas fa-star small text-warning" />
                </li>
              </ul>
              <h1>Red digital smartwatch</h1>
              <p className="text-muted lead">$250</p>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes nascetur ridiculus mus.
                Vestibulum ultricies aliquam convallis.
              </p>
              <div className="row align-items-stretch mb-4">
                <div className="col-sm-4 pr-sm-0">
                </div>
                <div className="col-sm-3 pl-sm-0 w-50">
                  <a
                    className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
                    href="cart.html"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
              <a className="text-dark p-0 mb-4 d-inline-block" href="#!">
                <i className="far fa-heart me-2" />
                Add to wish list
              </a>
              <br />
              <ul className="list-unstyled small d-inline-block">
                <li className="px-3 py-2 mb-1 bg-white">
                  <strong className="text-uppercase">SKU:</strong>
                  <span className="ms-2 text-muted">039</span>
                </li>
                <li className="px-3 py-2 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">
                    Category:
                  </strong>
                  <a className="reset-anchor ms-2 text-secondary" href="#!">
                    Demo Products
                  </a>
                </li>
                <li className="px-3 py-2 mb-1 bg-white text-muted">
                  <strong className="text-uppercase text-dark">Tags:</strong>
                  <a className="reset-anchor ms-2 text-secondary" href="#!">
                    Innovation
                  </a>
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
              <div className="p-4 p-lg-5 bg-white">
                <h6 className="text-uppercase">Product description </h6>
                <p className="text-muted text-sm mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          {/* RELATED PRODUCTS*/}
          <h2 className="h5 text-uppercase mb-4">Related products</h2>
          <div className="row">
            {/* PRODUCT*/}
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative">
                  <a className="d-block" href="detail.html">
                    <img className="img-fluid w-100" src={product1} alt="..." />
                  </a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-outline-dark" href="#!">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-dark" href="#!">
                          Add to cart
                        </a>
                      </li>
                      <li className="list-inline-item mr-0">
                        <a
                          className="btn btn-sm btn-outline-dark"
                          href="#productView"
                          data-bs-toggle="modal"
                        >
                          <i className="fas fa-expand" />
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
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative">
                  <a className="d-block" href="detail.html">
                    <img className="img-fluid w-100" src={product2} alt="..." />
                  </a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-outline-dark" href="#!">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-dark" href="#!">
                          Add to cart
                        </a>
                      </li>
                      <li className="list-inline-item mr-0">
                        <a
                          className="btn btn-sm btn-outline-dark"
                          href="#productView"
                          data-bs-toggle="modal"
                        >
                          <i className="fas fa-expand" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <h6>
                  {" "}
                  <a className="reset-anchor text-secondary" href="detail.html">
                    Air Jordan 12 gym red
                  </a>
                </h6>
                <p className="small text-muted">$300</p>
              </div>
            </div>
            {/* PRODUCT*/}
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative">
                  <a className="d-block" href="detail.html">
                    <img className="img-fluid w-100" src={product3} alt="..." />
                  </a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-outline-dark" href="#!">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-dark" href="#!">
                          Add to cart
                        </a>
                      </li>
                      <li className="list-inline-item mr-0">
                        <a
                          className="btn btn-sm btn-outline-dark"
                          href="#productView"
                          data-bs-toggle="modal"
                        >
                          <i className="fas fa-expand" />
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
            <div className="col-lg-3 col-sm-6">
              <div className="product text-center skel-loader">
                <div className="d-block mb-3 position-relative">
                  <a className="d-block" href="detail.html">
                    <img className="img-fluid w-100" src={product4} alt="..." />
                  </a>
                  <div className="product-overlay">
                    <ul className="mb-0 list-inline">
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-outline-dark" href="#!">
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li className="list-inline-item m-0 p-0">
                        <a className="btn btn-sm btn-dark" href="#!">
                          Add to cart
                        </a>
                      </li>
                      <li className="list-inline-item mr-0">
                        <a
                          className="btn btn-sm btn-outline-dark"
                          href="#productView"
                          data-bs-toggle="modal"
                        >
                          <i className="fas fa-expand" />
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
