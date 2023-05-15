import React from "react";
import { formatPrice } from "../../services/function";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartItem = ({ product, fn }) => {
  const { decreaseQuantity, increaseQuantity, removeProduct } = fn;
  return (
    <tr>
      <th className="ps-0 py-3 border-light" scope="row">
        <div className="d-flex align-items-center">
          <Link
            className="reset-anchor d-block animsition-link"
            to={`/product-details/${product.product._id}`}
          >
            <img src={product.product.img} alt="..." width={70} />
          </Link>
          <div className="ms-3">
            <strong className="h6">
              <Link
                className="reset-anchor d-block animsition-link"
                to={`/product-details/${product.product._id}`}
              >
                {product.product.name}
              </Link>
            </strong>
          </div>
        </div>
      </th>
      <td className="p-3 align-middle border-light">
        <p className="mb-0 small">$ {formatPrice(product.product.price)}</p>
      </td>
      <td className="p-3 align-middle border-light">
        <div className="border d-flex align-items-center justify-content-between px-3">
          <span className="small text-uppercase text-gray headings-font-family">
            Quantity
          </span>
          <div className="quantity ">
            <button
              className="dec-btn p-0"
              onClick={() => decreaseQuantity(product.product._id)}
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
              onClick={() => increaseQuantity(product.product._id)}
            >
              <GrCaretNext />
            </button>
          </div>
        </div>
      </td>
      <td className="p-3 align-middle border-light">
        <p className="mb-0 small">
          ${formatPrice(product.product.price * product.quantity)}
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
  );
};

export default CartItem;
