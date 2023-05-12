import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>
);
