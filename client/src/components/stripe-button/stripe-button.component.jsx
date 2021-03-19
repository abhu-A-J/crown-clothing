import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = (props) => {
  // price always should be in cents
  const { price } = props;

  const publishableKey =
    'pk_test_51H69JWLbJgRH1rjVuiRjaTn1EVJ96dS2ayWhRPYHUm5EucZoDL7j48ix7TnXI4lEFndmpiNvnHMA73hlqPCTgkF700rwJvolPP';

  const priceForStripe = price * 100;

  const onToken = (token) => {
    // send this to backend for charges
    console.log(token);
    console.log('Succesfully done');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
			stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
