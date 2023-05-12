import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../components/Layout/Header";
import TabFilter from "../components/Profile/TabFilter";
import axios from "axios";
import { API } from "../ENV_KEY";
import OrderItem from "../components/Profile/OrderItem";

const ProfilePage = () => {
  const navigate = useNavigate();
  let INIT = null;
  try {
    INIT = JSON.parse(localStorage.getItem("user-e-commerce")).user || null;
  } catch (err) {
    console.error(err);
  }

  const [logedUser, setLogedUser] = useState(INIT);

  const ProfilePageShow = () => {
    const [filterTab, setFilterTab] = useState("all");
    const [isLoading, setIsLoading] = useState(false);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
      const getData = async () => {
        setIsLoading(true);
        try {
          // const res = await axios.get(`${API}/orders/all-order`);
          const res = await axios.get(`${API}/orders/${logedUser._id}`);
          if (filterTab.toLowerCase() === "all") {
            setOrderList(res.data.order);
          } else {
            const filterOrder = res.data.order.filter(
              (order) =>
                order.orderStatus.toLowerCase() === filterTab.toLowerCase()
            );
            setOrderList(filterOrder);
          }
        } catch (error) {}
        setIsLoading(false);
      };
      getData();
    }, [filterTab]);

    return (
      <div className="page-holder">
        <Header />
        <div className="container">
          <TabFilter filterState={{ filterTab, setFilterTab }} />
          <div className=" ">
            {isLoading ? (
              <h2> Loading...</h2>
            ) : orderList.length !== 0 ? (
              orderList.map((order) => (
                <OrderItem order={order} key={order._id} />
              ))
            ) : (
              <h2>No order</h2>
            )}
          </div>
        </div>
      </div>
    );
  };

  return logedUser ? <ProfilePageShow /> : <h3>k o</h3>;
};

export default ProfilePage;
