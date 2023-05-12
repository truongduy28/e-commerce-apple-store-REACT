/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  GrCaretPrevious,
  GrCaretNext,
  GrFormPreviousLink,
  GrFormNextLink,
} from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import HeaderCart from "../components/Cart/HeaderCart";
import { useCartContext } from "../context/cartContext";
import OrderTotal from "../components/Cart/OrderTotal";
import Header from "../components/Layout/Header";
import axios from "axios";
import { API } from "../ENV_KEY";
import { useNavigate } from "react-router";
import { showErrorToast, showSuccessToast } from "./../services/toast";

const CartPage = () => {
  let INIT = null;
  try {
    INIT = JSON.parse(localStorage.getItem("user-e-commerce")).user || null;
  } catch (err) {
    console.error(err);
  }

  const [logedUser, setLogedUser] = useState(INIT);
  const {
    products,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
    getTotalPrice,
  } = useCartContext();

  const [orderInfo, setOrderInfo] = useState({
    name: "",
    product: products,
    sdt: "",
    address: "",
    userId: logedUser._id,
    total: getTotalPrice(),
  });

  const navigate = useNavigate();

  const handleCreateOrder = async () => {
    // e.preventDefault();
    console.log(orderInfo);

    if (!orderInfo.userId) {
      navigate("/login");
      showErrorToast("Must login previously checkout");
      return;
    }

    if (!orderInfo.name || !orderInfo.sdt || !orderInfo.address) {
      showErrorToast("Typing full feld");
      return;
    }
    if (products.length === 0) {
      showErrorToast("Cart null!");
      return;
    }
    try {
      const res = await axios.post(`${API}/orders/create-order`, orderInfo);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("cart-e-commerce", JSON.stringify([]));
        showSuccessToast("Order created successfully");
        navigate("/profile");
      }

      // naviga("/order");
    } catch (error) {}
  };
  return (
    <div className="page-holder">
      <Header />
      <div className="container p-0">
        {/* HERO SECTION*/}
        <HeaderCart />
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
                  {products.length === 0 ? (
                    <h2>Empty cart</h2>
                  ) : (
                    <tbody className="border-0">
                      {products.map((product) => (
                        <tr>
                          <th className="ps-0 py-3 border-light" scope="row">
                            <div className="d-flex align-items-center">
                              <a
                                className="reset-anchor d-block animsition-link"
                                href=""
                              >
                                <img
                                  src={product.product.img}
                                  alt="..."
                                  width={70}
                                />
                              </a>
                              <div className="ms-3">
                                <strong className="h6">
                                  <a
                                    className="reset-anchor animsition-link text-secondary"
                                    href="detail.html"
                                  >
                                    {product.product.name}
                                  </a>
                                </strong>
                              </div>
                            </div>
                          </th>
                          <td className="p-3 align-middle border-light">
                            <p className="mb-0 small">
                              ${" "}
                              {String(product.product.price).replace(
                                /(.)(?=(\d{3})+$)/g,
                                "$1,"
                              )}
                            </p>
                          </td>
                          <td className="p-3 align-middle border-light">
                            <div className="border d-flex align-items-center justify-content-between px-3">
                              <span className="small text-uppercase text-gray headings-font-family">
                                Quantity
                              </span>
                              <div className="quantity ">
                                <button
                                  className="dec-btn p-0"
                                  onClick={() =>
                                    decreaseQuantity(product.product._id)
                                  }
                                >
                                  <GrCaretPrevious />
                                </button>
                                <input
                                  className="form-control form-control-sm border-0 shadow-0 m-0 "
                                  type="text"
                                  value={product.quantity}
                                />
                                <button
                                  className="inc-btn p-0"
                                  onClick={() =>
                                    increaseQuantity(product.product._id)
                                  }
                                >
                                  <GrCaretNext />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="p-3 align-middle border-light">
                            <p className="mb-0 small">
                              $
                              {String(
                                product.product.price * product.quantity
                              ).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
                            </p>
                          </td>
                          <td className="p-3 align-middle border-light">
                            <a
                              className="reset-anchor text-dark"
                              href="#!"
                              onClick={() => removeProduct(product.product._id)}
                            >
                              <RiDeleteBin6Line />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
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
            <OrderTotal
              state={{ orderInfo, setOrderInfo, handleCreateOrder }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
