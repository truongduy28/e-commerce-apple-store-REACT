import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
  let INIT = [];
  try {
    INIT = JSON.parse(localStorage.getItem("cart-e-commerce")) || [];
  } catch (err) {
    console.error(err);
  }
  // products base = [{product: {_id: 1, name: 'iphone'}, quantity: 1}, {product: {_id: 2, name: 'imac', quantity:2},...]
  const [products, setProducts] = useState(INIT);

  function addToCart(productToAdd) {
    const existingProductIndex = products.findIndex(
      (product) => product.product._id === productToAdd._id
    );

    if (existingProductIndex !== -1) {
      // The product already exists in the cart, so we'll update its quantity
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity += 1;
      setProducts(updatedProducts);
    } else {
      // The product is new to the cart, so we'll add it
      setProducts((prevProducts) => {
        return [{ product: productToAdd, quantity: 1 }, ...prevProducts];
      });
    }

    localStorage.setItem("cart-e-commerce", JSON.stringify(products));
  }

  function removeFromCart(productToRemove) {
    const updatedProducts = products.filter(
      (product) => product.product._id !== productToRemove._id
    );
    setProducts(updatedProducts);
    localStorage.setItem("cart-e-commerce", JSON.stringify(products));
  }

  function changeProductQuantity(productToChange, newQuantity) {
    const existingProductIndex = products.findIndex(
      (product) => product.product._id === productToChange._id
    );

    if (existingProductIndex !== -1) {
      // The product exists in the cart, so we'll update its quantity
      const updatedProducts = [...products];
      updatedProducts[existingProductIndex].quantity = newQuantity;
      setProducts(updatedProducts);
    } else {
      // The product doesn't exist in the cart, so we won't make any changes
      console.log("Error: Product not found in cart.");
    }
    localStorage.setItem("cart-e-commerce", JSON.stringify(products));
  }

  function increaseQuantity(productId) {
    const productIndex = products.findIndex(
      (product) => product.product._id === productId
    );

    if (productIndex !== -1) {
      // The product exists in the cart, so we'll update its quantity
      const updatedProducts = [...products];
      updatedProducts[productIndex].quantity += 1;
      setProducts(updatedProducts);
      localStorage.setItem("cart-e-commerce", JSON.stringify(updatedProducts));
    }
  }

  function decreaseQuantity(productId) {
    const productIndex = products.findIndex(
      (product) => product.product._id === productId
    );

    if (productIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[productIndex].quantity -= 1;
      if (updatedProducts[productIndex].quantity <= 0) {
        // If the quantity reaches 0, remove the product from the cart
        updatedProducts.splice(productIndex, 1);
      }
      setProducts(updatedProducts);
      localStorage.setItem("cart-e-commerce", JSON.stringify(updatedProducts));
    }
  }

  function removeProduct(productId) {
    const productIndex = products.findIndex(
      (product) => product.product._id === productId
    );

    if (productIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts.splice(productIndex, 1);
      setProducts(updatedProducts);
      localStorage.setItem("cart-e-commerce", JSON.stringify(updatedProducts));
    }
  }

  function getTotalPrice() {
    let totalPrice = 0;

    for (const product of products) {
      totalPrice += product.product.price * product.quantity;
    }

    return totalPrice;
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
        getTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
