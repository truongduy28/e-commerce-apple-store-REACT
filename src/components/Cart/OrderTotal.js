import React from "react";
import { useCartContext } from "../../context/cartContext";
import OrderInfomation from "./OrderInfomation";
import { formatPrice } from "../../services/function";

function OrderTotal({ state }) {
  const { getTotalPrice } = useCartContext();
  return (
    <div className="col-lg-4">
      <div className="card border-0 rounded-0 p-lg-4 bg-light">
        <div className="card-body">
          <h5 className="text-uppercase mb-4">Cart total</h5>
          <ul className="list-unstyled mb-0">
            <li className="d-flex align-items-center justify-content-between">
              <strong className="text-uppercase small font-weight-bold">
                Subtotal
              </strong>
              <span className="text-muted small">
                $ {formatPrice(getTotalPrice())}
              </span>
            </li>
            <li className="border-bottom my-2" />
            <li className="d-flex align-items-center justify-content-between mb-4">
              <strong className="text-uppercase small font-weight-bold">
                Total
              </strong>
              <span>$ {formatPrice(getTotalPrice())}</span>
            </li>
            <li>
              <div>
                <OrderInfomation state={state} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrderTotal;
