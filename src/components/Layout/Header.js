/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { logOutUser } from "../../services/function";

const Header = () => {
  const navigate = useNavigate();
  let INIT = null;
  try {
    INIT = JSON.parse(localStorage.getItem("user-e-commerce")).user || null;
  } catch (err) {
    console.error(err);
  }

  const { products } = useCartContext();
  const NAV_LINK = [
    { name: "Home", uri: "" },
    { name: "Products", uri: "products" },
    { name: "About", uri: "about" },
  ];

  const [logedUser, setLogedUser] = useState(INIT);

  const handleLogout = () => {
    logOutUser();
    navigate("/login");
  };

  return (
    <header className="header bg-white">
      <div className="container px-lg-3 py-0">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          <a className="navbar-brand" href="index.html">
            <span className="fw-bold text-uppercase text-dark">Boutique</span>
          </a>
          <button
            className="navbar-toggler navbar-toggler-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              {NAV_LINK.map((nav) => (
                <li className="nav-item">
                  <Link className="nav-link " to={"/" + nav.uri}>
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <AiOutlineShoppingCart />
                  Cart
                  <small className="text-gray fw-normal">
                    {" "}
                    ({products.length === 0 ? 0 : products.length})
                  </small>
                </Link>
              </li>
              {logedUser ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <AiOutlineUser />
                      {logedUser.name}
                    </Link>
                  </li>
                  <li className="nav-item" onClick={() => handleLogout()}>
                    <p className="nav-link">
                      <AiOutlineUser />
                      Logout
                    </p>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <AiOutlineUser />
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
