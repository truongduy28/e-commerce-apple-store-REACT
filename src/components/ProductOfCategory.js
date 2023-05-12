import React from "react";
import Product from "./Layout/ProductRandom";

const ProductOfCategory = () => {
  return (
    <>
      <div className="container">
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Shop</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-lg-end mb-0 px-0 bg-light">
                    <li className="breadcrumb-item">
                      <a className="text-dark" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              {/* SHOP SIDEBAR*/}
              <div className="col-lg-3 order-2 order-lg-1">
                <h5 className="text-uppercase mb-4">Categories</h5>
                <div className="py-2 px-4 bg-dark text-white mb-3">
                  <strong className="small text-uppercase fw-bold">
                    Fashion &amp; Acc
                  </strong>
                </div>
                <ul className="list-unstyled small text-muted ps-lg-4 font-weight-normal">
                  <li className="mb-2">
                    <a className="reset-anchor text-dark" href="#!">
                      Women's T-Shirts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor text-dark" href="#!">
                      Men's T-Shirts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor text-dark" href="#!">
                      Dresses
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor text-dark" href="#!">
                      Novelty socks
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor text-dark" href="#!">
                      Women's sunglasses
                    </a>
                  </li>
                  <li className="mb-2">
                    <a className="reset-anchor text-dark" href="#!">
                      Men's sunglasses
                    </a>
                  </li>
                </ul>

                <h6 className="text-uppercase mb-4">Price range</h6>
                <div className="price-range pt-4 mb-5">
                  <input
                    type="range"
                    className="form-range"
                    name=""
                    value={200}
                  />
                  <div className="row pt-2">
                    <div className="col-6">
                      <strong className="small fw-bold text-uppercase">
                        From
                      </strong>
                    </div>
                    <div className="col-6 text-end">
                      <strong className="small fw-bold text-uppercase">
                        To
                      </strong>
                    </div>
                  </div>
                </div>
                <h6 className="text-uppercase mb-3">Show only</h6>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox_1"
                  />
                  <label className="form-check-label" htmlFor="checkbox_1">
                    Returns Accepted
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox_2"
                  />
                  <label className="form-check-label" htmlFor="checkbox_2">
                    Returns Accepted
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox_3"
                  />
                  <label className="form-check-label" htmlFor="checkbox_3">
                    Completed Items
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox_4"
                  />
                  <label className="form-check-label" htmlFor="checkbox_4">
                    Sold Items
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox_5"
                  />
                  <label className="form-check-label" htmlFor="checkbox_5">
                    Deals &amp; Savings
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox_6"
                  />
                  <label className="form-check-label" htmlFor="checkbox_6">
                    Authorized Seller
                  </label>
                </div>
                <h6 className="text-uppercase mb-3">Buying format</h6>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customRadio"
                    id="radio_1"
                  />
                  <label className="form-check-label" htmlFor="radio_1">
                    All Listings
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customRadio"
                    id="radio_2"
                  />
                  <label className="form-check-label" htmlFor="radio_2">
                    Best Offer
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customRadio"
                    id="radio_3"
                  />
                  <label className="form-check-label" htmlFor="radio_3">
                    Auction
                  </label>
                </div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="customRadio"
                    id="radio_4"
                  />
                  <label className="form-check-label" htmlFor="radio_4">
                    Buy It Now
                  </label>
                </div>
              </div>
              {/* SHOP LISTING*/}
              <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <div className="row mb-3 align-items-center">
                  <div className="col-lg-6 mb-2 mb-lg-0">
                    <p className="text-sm text-muted mb-0">
                      Showing 1–12 of 53 results
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-inline d-flex align-items-center justify-content-lg-end mb-0">
                      <li className="list-inline-item text-muted me-3">
                        <a className="reset-anchor text-dark p-0" href="#!">
                          <i className="fas fa-th-large" />
                        </a>
                      </li>
                      <li className="list-inline-item text-muted me-3">
                        <a className="reset-anchor text-dark p-0" href="#!">
                          <i className="fas fa-th" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <select
                          className="selectpicker form-control form-control-sm"
                          data-customclass="form-control form-control-sm"
                        >
                          <option value>Sort By </option>
                          <option value="default">Default sorting </option>
                          <option value="popularity">Popularity </option>
                          <option value="low-high">Price: Low to High </option>
                          <option value="high-low">Price: High to Low </option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
                <Product />
                {/* <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center justify-content-lg-end">
                    <li className="page-item mx-1">
                      <a className="page-link" href="#!" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </a>
                    </li>
                    <li className="page-item mx-1 active">
                      <a className="page-link" href="#!">
                        1
                      </a>
                    </li>
                    <li className="page-item mx-1">
                      <a className="page-link" href="#!">
                        2
                      </a>
                    </li>
                    <li className="page-item mx-1">
                      <a className="page-link " href="#!">
                        3
                      </a>
                    </li>
                    <li className="page-item ms-1">
                      <a className="page-link" href="#!" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </a>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductOfCategory;
