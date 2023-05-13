import React, { useEffect, useState } from "react";
import { API } from "../../ENV_KEY";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "./StripeCheckout";

const StripePay = ({ currentOrder }) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [total, setTotal] = useState(currentOrder.total);

  useEffect(() => {
    fetch(API + "/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    if (currentOrder.total == 0) return;
    fetch(API + "/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: currentOrder.total + "00" }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, [total]);

  return (
    <div>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <StripeCheckout currentOrder={currentOrder} />
        </Elements>
      )}
    </div>
  );
};

export default StripePay;
