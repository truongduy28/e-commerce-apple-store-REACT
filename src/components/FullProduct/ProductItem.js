import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { showSuccessToast } from "./../../services/toast";
import { formatPrice } from "../../services/function";

const ProductItem = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product);
    showSuccessToast("Product added successfully");
  };

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
                <p
                  className="btn btn-sm btn-dark"
                  onClick={() => handleAddToCart()}
                >
                  Add to cart
                </p>
              </li>
              <li className="list-inline-item me-0"></li>
            </ul>
          </div>
        </div>
        <h6>
          <p className="reset-anchor text-secondary" href="#">
            {product.name}
          </p>
        </h6>
        <p className="small text-muted">$ {formatPrice(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
