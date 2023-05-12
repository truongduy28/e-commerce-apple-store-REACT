import React, { useState } from "react";

const OrderInfomation = ({ state }) => {
  const { orderInfo, setOrderInfo, handleCreateOrder } = state;
  const [isShowForm, setIsShowForm] = useState(false);
  return isShowForm ? (
    <div>
      <div>
        <strong className="text-uppercase small font-weight-bold">
          FULLNAME RECEIVER
        </strong>
        <div className="input-group mb-0">
          <input
            className="form-control"
            type="text"
            placeholder="name receiver"
            value={orderInfo.name}
            onChange={(e) =>
              setOrderInfo({ ...orderInfo, name: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <strong className="text-uppercase small font-weight-bold">
          ADDRESS
        </strong>
        <div className="input-group mb-0">
          <input
            className="form-control"
            type="text"
            placeholder="address to ship order"
            value={orderInfo.address}
            onChange={(e) =>
              setOrderInfo({ ...orderInfo, address: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <strong className="text-uppercase small font-weight-bold">
          PHONE NUMBER
        </strong>
        <div className="input-group mb-0">
          <input
            className="form-control"
            type="text"
            placeholder="number phone "
            value={orderInfo.sdt}
            onChange={(e) =>
              setOrderInfo({ ...orderInfo, sdt: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <div className="input-group mb-0 mt-4">
          <button
            className="btn btn-dark btn-sm w-100 "
            type="submit"
            onClick={() => handleCreateOrder()}
          >
            COMFIRM ORDER
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div
        className="input-group mb-0 mt-4"
        onClick={() => setIsShowForm(true)}
      >
        <div className="btn btn-dark btn-sm w-100 " type="submit">
          PROCESS CHECKOUT
        </div>
      </div>
    </div>
  );
};

export default OrderInfomation;
