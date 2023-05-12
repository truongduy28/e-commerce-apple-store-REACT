import React from "react";
import { Routes, Route } from "react-router-dom";
import FullProductPage from "./pages/FullProductPage";
import ProductDetailsPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import OrderPage from "./pages/OrderPage";
const RouterDom = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product-Details/:id" element={<ProductDetailsPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/products" element={<FullProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/order/:id" element={<OrderPage />} />
      </Routes>
    </>
  );
};

export default RouterDom;
