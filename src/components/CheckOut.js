/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const CheckOut = () => {
  return (
    <>
      <div>
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
                        natoque penatibus et magnis dis parturient montes
                        nascetur ridiculus mus. Vestibulum ultricies aliquam
                        convallis.
                      </p>
                      <div className="row align-items-stretch mb-4 gx-0">
                        <div className="col-sm-7">
                          <div className="border d-flex align-items-center justify-content-between py-1 px-3">
                            <span className="small text-uppercase text-gray mr-4 no-select">
                              Quantity
                            </span>
                            <div className="quantity">
                              <button className="dec-btn p-0">
                                <i className="fas fa-caret-left" />
                              </button>
                              <input
                                className="form-control border-0 shadow-0 p-0"
                                type="text"
                                defaultValue={1}
                              />
                              <button className="inc-btn p-0">
                                <i className="fas fa-caret-right" />
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
        <div className="container">
          {/* HERO SECTION*/}
          <section className="py-5 bg-light">
            <div className="container">
              <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                <div className="col-lg-6">
                  <h1 className="h2 text-uppercase mb-0">Checkout</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                      <li className="breadcrumb-item">
                        <a className="text-dark" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a className="text-dark" href="cart.html">
                          Cart
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Checkout
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5">
            {/* BILLING ADDRESS*/}
            <h2 className="h5 text-uppercase mb-4">Billing details</h2>
            <div className="row">
              <div className="col-lg-8">
                <form action="#">
                  <div className="row gy-3">
                    <div className="col-lg-6">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="firstName"
                      >
                        First name{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="lastName"
                      >
                        Last name{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        id="lastName"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="email"
                      >
                        Email address{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        id="email"
                        placeholder="e.g. Jason@example.com"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="phone"
                      >
                        Phone number{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="tel"
                        id="phone"
                        placeholder="e.g. +02 245354745"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="company"
                      >
                        Company name (optional){" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        id="company"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="col-lg-6 form-group">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="country"
                      >
                        Country
                      </label>
                      <select
                        className="country form-control form-control-lg rounded-0 "
                        id="country"
                        data-customclass="form-control form-control-lg rounded-0"
                      >
                        <option value>Choose your country</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="address"
                      >
                        Address line 1
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        id="address"
                        placeholder="House number and street name"
                      />
                    </div>
                    <div className="col-lg-12">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="addressalt"
                      >
                        Address line 2{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        id="addressalt"
                        placeholder="Apartment, Suite, Unit, etc (optional)"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="city"
                      >
                        Town/City{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        id="city"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label
                        className="form-label text-sm text-uppercase"
                        htmlFor="state"
                      >
                        State/County{" "}
                      </label>
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        id="state"
                      />
                    </div>
                    <div className="col-lg-6">
                      <button
                        className="btn btn-link text-dark p-0 shadow-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#alternateAddress"
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id="alternateAddressCheckbox"
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="alternateAddressCheckbox"
                          >
                            Alternate billing address
                          </label>
                        </div>
                      </button>
                    </div>
                    <div className="collapse" id="alternateAddress">
                      <div className="row gy-3">
                        <div className="col-12 mt-4">
                          <h2 className="h4 text-uppercase mb-4">
                            Alternative billing details
                          </h2>
                        </div>
                        <div className="col-lg-6">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="firstName2"
                          >
                            First name{" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            id="firstName2"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="lastName2"
                          >
                            Last name{" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            id="lastName2"
                            placeholder="Enter your last name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="email2"
                          >
                            Email address{" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="email"
                            id="email2"
                            placeholder="e.g. Jason@example.com"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="phone2"
                          >
                            Phone number{" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="tel"
                            id="phone2"
                            placeholder="e.g. +02 245354745"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="company2"
                          >
                            Company name (optional){" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            id="company2"
                            placeholder="Your company name"
                          />
                        </div>
                        <div className="col-lg-6 form-group">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="countryAlt"
                          >
                            Country
                          </label>
                          <select
                            className="country"
                            id="countryAlt"
                            data-customclass="form-control form-control-lg rounded-0"
                          >
                            <option value>Choose your country</option>
                          </select>
                        </div>
                        <div className="col-lg-12">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="address2"
                          >
                            Address line 1{" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            id="address2"
                            placeholder="House number and street name"
                          />
                        </div>
                        <div className="col-lg-12">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="addressalt2"
                          >
                            Address line 2{" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            id="addressalt2"
                            placeholder="Apartment, Suite, Unit, etc (optional)"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="city2"
                          >
                            Town/City{" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            id="city2"
                          />
                        </div>
                        <div className="col-lg-6">
                          <label
                            className="form-label text-sm text-uppercase"
                            htmlFor="state2"
                          >
                            State/County{" "}
                          </label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            id="state2"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 form-group">
                      <button className="btn btn-dark" type="submit">
                        Place order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* ORDER SUMMARY*/}
              <div className="col-lg-4">
                <div className="card border-0 rounded-0 p-lg-4 bg-light">
                  <div className="card-body">
                    <h5 className="text-uppercase mb-4">Your order</h5>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center justify-content-between">
                        <strong className="small fw-bold">
                          Red digital smartwatch
                        </strong>
                        <span className="text-muted small">$250</span>
                      </li>
                      <li className="border-bottom my-2" />
                      <li className="d-flex align-items-center justify-content-between">
                        <strong className="small fw-bold">
                          Gray Nike running shoes
                        </strong>
                        <span className="text-muted small">$351</span>
                      </li>
                      <li className="border-bottom my-2" />
                      <li className="d-flex align-items-center justify-content-between">
                        <strong className="text-uppercase small fw-bold">
                          Total
                        </strong>
                        <span>$601</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
