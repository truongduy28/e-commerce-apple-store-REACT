import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { API } from "../../ENV_KEY";
import { useNavigate } from "react-router";
import { showErrorToast, showSuccessToast } from "../../services/toast";

const StripeCheckout = ({ currentOrder }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();
  const handleCreateOrder = async () => {
    // console.log(currentOrder);

    if (!currentOrder.userId) {
      navigate("/login");
      showErrorToast("Must login previously checkout");
      return;
    }

    if (!currentOrder.name || !currentOrder.sdt || !currentOrder.address) {
      showErrorToast("Typing full feld");
      return;
    }
    if (currentOrder.product.length === 0) {
      showErrorToast("Cart null!");
      return;
    }
    try {
      const res = await axios.post(`${API}/orders/create-order`, {
        ...currentOrder,
        payStatus: "Đã thanh toán",
      });
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("cart-e-commerce", JSON.stringify([]));
        showSuccessToast("Order created successfully");
      }

      // naviga("/order");
    } catch (error) {}
  };

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    await handleCreateOrder();

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/profile`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <form
      id="payment-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <PaymentElement id="payment-element" />
      <div style={{ display: "flex" }}>
        <button
          disabled={isProcessing || !stripe || !elements}
          id="submit"
          // style={{ margin: "20px auto" }}
          className="btn btn-dark  w-100 mt-2"
        >
          <span id="button-text" className=" ">
            {isProcessing ? "Processing ... " : "Pay now"}
          </span>
        </button>
      </div>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default StripeCheckout;
