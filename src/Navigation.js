import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  FullProductPage,
  ProductDetailsPage,
  CartPage,
  OrderPage,
  ProfilePage,
  AboutPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from "./pages";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Product-Details/:id" element={<ProductDetailsPage />} />
      <Route path="/Cart" element={<CartPage />} />
      <Route path="/products" element={<FullProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/order/:id" element={<OrderPage />} />
    </Routes>
  );
};

export default Navigation;
