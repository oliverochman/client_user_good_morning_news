import React from "react";
import {
  CardExpiryElement,
  CardCVCElement,
  CardNumberElement,
  injectStripe,
} from "react-stripe-elements";

const PaymentForm = (props) => {
  const payWithStripe = async (e) => {
    e.preventDefault();
    let stripeResponse = await props.stripe.createToken();
    props.submitPayment(stripeResponse.token.id);
  };

  return (
    <form onSubmit={payWithStripe}>
      <div data-cy="card-number">
        <label>Card Number</label>
        <CardNumberElement />
      </div>
      <div data-cy="card-expiry">
        <label>Card Expiry</label>
        <CardExpiryElement />
      </div>
      <div data-cy="card-cvc">
        <label>Card CVC</label>
        <CardCVCElement />
      </div>
      <button>Subscribe Now!</button>
    </form>
  );
};

export default injectStripe(PaymentForm);
