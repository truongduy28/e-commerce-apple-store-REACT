import React from "react";
import {
  GrCaretPrevious,
  GrCaretNext,
  GrFormPreviousLink,
  GrFormNextLink,
  GrGift,
} from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

import product1 from "../assets/img/product-1.jpg";
import product2 from "../assets/img/product-2.jpg";
const CartItem = () => {
  return (
    <>
      <div className="container">
        {/* HERO SECTION*/}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="h2 text-uppercase mb-0">Cart</h1>
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
                      Cart
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <h2 className="h5 text-uppercase mb-4">Shopping cart</h2>
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              {/* CART TABLE*/}
              <div className="table-responsive mb-4">
                <table className="table text-nowrap">
                  <thead className="bg-light">
                    <tr>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase">
                          Product
                        </strong>
                      </th>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase">
                          Price
                        </strong>
                      </th>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase">
                          Quantity
                        </strong>
                      </th>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase">
                          Total
                        </strong>
                      </th>
                      <th className="border-0 p-3" scope="col">
                        <strong className="text-sm text-uppercase" />
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-0">
                    <tr>
                      <th className="ps-0 py-3 border-light" scope="row">
                        <div className="d-flex align-items-center">
                          <a
                            className="reset-anchor d-block animsition-link"
                            href="detail.html"
                          >
                            <img src={product1} alt="..." width={70} />
                          </a>
                          <div className="ms-3">
                            <strong className="h6">
                              <a
                                className="reset-anchor animsition-link text-secondary"
                                href="detail.html"
                              >
                                Red digital smartwatch
                              </a>
                            </strong>
                          </div>
                        </div>
                      </th>
                      <td className="p-3 align-middle border-light">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="p-3 align-middle border-light">
                        <div className="border d-flex align-items-center justify-content-between px-3">
                          <span className="small text-uppercase text-gray headings-font-family">
                            Quantity
                          </span>
                          <div className="quantity ">
                            <button className="dec-btn p-0">
                              <GrCaretPrevious />
                            </button>
                            <input
                              className="form-control form-control-sm border-0 shadow-0 m-0 "
                              type="text"
                              defaultValue={2}
                            />
                            <button className="inc-btn p-0">
                              <GrCaretNext />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 align-middle border-light">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="p-3 align-middle border-light">
                        <a className="reset-anchor" href="#!">
                          <RiDeleteBin6Line />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th className="ps-0 py-3 border-0" scope="row">
                        <div className="d-flex align-items-center">
                          <a
                            className="reset-anchor d-block animsition-link"
                            href="detail.html"
                          >
                            <img src={product2} alt="..." width={70} />
                          </a>
                          <div className="ms-3">
                            <strong className="h6">
                              <a
                                className="reset-anchor animsition-link text-secondary"
                                href="detail.html"
                              >
                                Apple watch
                              </a>
                            </strong>
                          </div>
                        </div>
                      </th>
                      <td className="p-3 align-middle border-0">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="p-3 align-middle border-0">
                        <div className="border d-flex align-items-center justify-content-between px-3">
                          <span className="small text-uppercase text-gray headings-font-family">
                            Quantity
                          </span>
                          <div className="quantity">
                            <button className="dec-btn p-0">
                              <GrCaretPrevious />
                            </button>
                            <input
                              className="form-control form-control-sm border-0 shadow-0 m-0"
                              type="text"
                              defaultValue={1}
                            />
                            <button className="inc-btn p-0">
                              <GrCaretNext />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 align-middle border-0">
                        <p className="mb-0 small">$250</p>
                      </td>
                      <td className="p-3 align-middle border-0">
                        <a className="reset-anchor" href="#!">
                          <RiDeleteBin6Line />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* CART NAV*/}
              <div className="bg-light px-4 py-3">
                <div className="row align-items-center text-center">
                  <div className="col-md-6 mb-3 mb-md-0 text-md-start">
                    <a
                      className="btn btn-link p-0 text-dark btn-sm"
                      href="shop.html"
                    >
                      <GrFormPreviousLink />
                      Continue shopping
                    </a>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <a
                      className="btn btn-outline-dark btn-sm"
                      href="checkout.html"
                    >
                      Procceed to checkout
                      <GrFormNextLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* ORDER TOTAL*/}
            <div className="col-lg-4">
              <div className="card border-0 rounded-0 p-lg-4 bg-light">
                <div className="card-body">
                  <h5 className="text-uppercase mb-4">Cart total</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between">
                      <strong className="text-uppercase small font-weight-bold">
                        Subtotal
                      </strong>
                      <span className="text-muted small">$250</span>
                    </li>
                    <li className="border-bottom my-2" />
                    <li className="d-flex align-items-center justify-content-between mb-4">
                      <strong className="text-uppercase small font-weight-bold">
                        Total
                      </strong>
                      <span>$250</span>
                    </li>
                    <li>
                      <form action="#">
                        <div className="input-group mb-0">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter your coupon"
                          />
                          <button
                            className="btn btn-dark btn-sm w-100 "
                            type="submit"
                          >
                            Apply coupon
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartItem;
