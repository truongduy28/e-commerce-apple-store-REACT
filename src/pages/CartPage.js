/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { GrFormPreviousLink } from "react-icons/gr";
import { HeaderCart, CartItem, OrderTotal } from "../components/Cart";
import { useCartContext } from "../context/cartContext";
import { Header, Footer } from "../components/Layout";
import axios from "axios";
import { API } from "../ENV_KEY";
import { useNavigate } from "react-router";
import { showErrorToast, showSuccessToast } from "./../services/toast";
import { Link } from "react-router-dom";
import { TABLE_CART_DATA } from "../data";

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
    userId: logedUser ? logedUser._id : null,
    total: getTotalPrice(),
  });

  const navigate = useNavigate();

  const handleCreateOrder = async () => {
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
    <>
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
                        {TABLE_CART_DATA.TABLE_HEADER.map(
                          (tableHeader, index) => (
                            <th
                              className="border-0 p-3"
                              key={index}
                              scope="col"
                            >
                              <strong className="text-sm text-uppercase">
                                {tableHeader}
                              </strong>
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    {products.length === 0 ? (
                      <tr className="text-center border-0 ">
                        <td colSpan={5}>
                          <h2 className="mt-5">Empty cart</h2>
                        </td>
                      </tr>
                    ) : (
                      <tbody className="border-0">
                        {products.map((product) => (
                          <CartItem
                            key={product.product._id}
                            product={product}
                            fn={{
                              increaseQuantity,
                              removeProduct,
                              decreaseQuantity,
                            }}
                          />
                        ))}
                      </tbody>
                    )}
                  </table>
                </div>
                {/* CART NAV*/}
                <div className="bg-light px-4 py-3">
                  <div className="row align-items-center text-center">
                    <div className="col-md-6 mb-3 mb-md-0 text-md-start">
                      <Link
                        className="btn btn-link p-0 text-dark btn-sm"
                        to="/"
                      >
                        <GrFormPreviousLink />
                        Continue shopping
                      </Link>
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
      <Footer />
    </>
  );
};

export default CartPage;
