import React from "react";
import { AiOutlineHeart, AiOutlineExpand } from "react-icons/ai";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const ProductItem = ({ product }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="product text-center">
        <div className="position-relative mb-3">
          <div className="badge text-white bg-" />
          <Link className="d-block" to={"/product-details/" + product._id}>
            <img className="img-fluid w-100" src={product.img} alt="..." />
          </Link>
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
            {product.name}
          </a>
        </h6>
        <p className="small text-muted">
          $ {String(product.price).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
