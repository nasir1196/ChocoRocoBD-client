import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CardForm from "../CardForm/CardForm";

const stripePromise = loadStripe(
  "pk_test_51IeHbqGYy4cmb7F9VYXJWNO9h1YQOf3zCskavlpp8QstgBIZYgtLDtj7CAQSsIrhfiMtnAZMrqVbgmYYxVncp9O900cf9ZmDKm"
);

const ProcessPayment = ({ paymentSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <CardForm addPaymentSuccess={paymentSuccess}></CardForm>
    </Elements>
  );
};

export default ProcessPayment;
