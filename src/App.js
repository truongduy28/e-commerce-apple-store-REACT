import React from "react";
import "../src/css/style.default.min.css";
import "./pages/style.css";
import RouterDom from "./RouterDom";
import { useCartContext } from "./context/cartContext";
const App = () => {
  return (
    <>
      <RouterDom />
    </>
  );
};

export default App;
