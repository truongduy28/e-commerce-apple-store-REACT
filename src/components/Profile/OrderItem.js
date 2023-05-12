import React from "react";
import { formatHHMMDDMMYYY } from "../../services/function";
import { useNavigate } from "react-router";
const OrderItem = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between align-items-center mt-4 border">
      <div className="ps-0 py-3 border-light" scope="row">
        <div className="d-flex align-items-center">
          <a className="reset-anchor d-block animsition-link" href="">
            <img src={order.product[0].product.img} alt="..." width={70} />
          </a>
          <div className="ms-3">
            <strong className="h6">
              <a
                className="reset-anchor animsition-link text-secondary"
                href="detail.html"
              >
                {order.product[0].product.name}
              </a>
            </strong>
          </div>
        </div>
      </div>
      <div className="p-3 align-middle border-light">
        <p className="mb-0 small">
          $ {String(order.total).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
        </p>
      </div>
      <div className="p-3 align-middle border-light">
        <div className=" d-flex align-items-center justify-content-between px-3">
          <span className="small text-uppercase text-gray headings-font-family">
            Quantity total {order.product.length} items
          </span>
        </div>
      </div>
      <div className="p-3 align-middle border-light d-flex justify-content-center flex-column align-items-center">
        <strong className="h6">
          <a
            className="reset-anchor animsition-link text-secondary"
            href="detail.html"
          >
            {formatHHMMDDMMYYY(order.createdAt)}
          </a>
        </strong>
        <div
          className="btn btn-dark btn-sm w-100 my-2 "
          onClick={() => navigate("/order/" + order._id)}
        >
          View order
        </div>
        <strong className="h6">
          <a
            className="reset-anchor animsition-link text-secondary"
            href="detail.html"
          >
            {order.orderStatus}
          </a>
        </strong>
        <strong className="h6">
          <a
            className="reset-anchor animsition-link text-secondary"
            href="detail.html"
          >
            {order.payStatus}
          </a>
        </strong>
      </div>
    </div>
  );
};

export default OrderItem;
