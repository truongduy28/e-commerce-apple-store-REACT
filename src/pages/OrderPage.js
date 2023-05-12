/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import { useParams } from "react-router";
import axios from "axios";
import { API } from "../ENV_KEY";
import { formatHHMMDDMMYYY, formatPrice } from "../services/function";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

function OrderPage() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState(null);
  const [totalProductQuantity, setTotalProductQuantity] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${API}/orders/order-detail/${id}`);
        setOrder(res.data.order);
        const totalQuantity = res.data.order.product.reduce(
          (total, { quantity }) => total + quantity,
          0
        );
        setTotalProductQuantity(totalQuantity);
      } catch (error) {}
      setIsLoading(false);
    };
    getData();
  }, [id]);

  return (
    <div className="page-holder">
      <Header />
      <div className="container">
        {isLoading ? (
          <h2 className="text-center py-5">Loading...</h2>
        ) : (
          order && (
            <div className="border width-75 p-4 shadow-customize">
              <h3 className="text-center mb-4">Your Order </h3>
              <div className="d-flex">
                <div
                  style={{ flex: 1, borderWidth: "2px" }}
                  className="border-right"
                >
                  <div className="info d-flex  align-items-center gap-2">
                    <p>Fullname of reciver: </p>
                    <p>{order.name}</p>
                  </div>
                  <div className="info d-flex  align-items-center gap-2">
                    <p>Number phone of reciver: </p>
                    <p>{order.sdt}</p>
                  </div>
                  <div className="info d-flex  align-items-center gap-2">
                    <p>Address shipment: </p>
                    <p>{order.address}</p>
                  </div>
                  <div className="info d-flex  align-items-center gap-2">
                    <p>Account buy: </p>
                    <p>{order.boughtBy.name}</p>
                  </div>
                  <div className="info d-flex  align-items-center gap-2">
                    <p>Email: </p>
                    <p>{order.boughtBy.email}</p>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="info d-flex  align-items-center justify-content-end gap-2">
                    <p>Total amount: </p>
                    <p>{formatPrice(order.total)} vnđ</p>
                  </div>
                  <div className="info d-flex  align-items-center justify-content-end gap-2">
                    <p>Total product quantity: </p>
                    <p>{totalProductQuantity} item</p>
                  </div>
                  <div className="info d-flex  align-items-center justify-content-end gap-2">
                    <p>Booked date: </p>
                    <p>{formatHHMMDDMMYYY(order.createdAt)} </p>
                  </div>
                  <div className="info d-flex  align-items-center justify-content-end gap-2">
                    <p>Updated last time: </p>
                    <p>{formatHHMMDDMMYYY(order.updatedAt)} </p>
                  </div>
                </div>
              </div>
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
                    </tr>
                  </thead>
                  {order.product.length === 0 ? (
                    <h2>Empty cart</h2>
                  ) : (
                    <tbody className="border-0">
                      {order.product.map((product) => (
                        <tr>
                          <th className="ps-0 py-3 border-light" scope="row">
                            <div className="d-flex align-items-center">
                              <a
                                className="reset-anchor d-block animsition-link"
                                href="#"
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
                                    href="#"
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
                                <p className="form-control form-control-sm border-0 shadow-0 m-0 ">
                                  {product.quantity}
                                </p>
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
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
              <div>
                <div className="d-flex">
                  <div
                    style={{ flex: 1 }}
                    className="d-flex justify-content-center"
                  >
                    <p>{order.orderStatus}</p>
                  </div>
                  <div
                    style={{ flex: 1 }}
                    className="d-flex justify-content-center"
                  >
                    <p>{order.payStatus}</p>
                  </div>
                </div>
                <div className="control d-flex justify-content-center ">
                  <div className="btn btn-danger  ">CANCEL ORDER</div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default OrderPage;
