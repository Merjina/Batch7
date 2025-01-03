import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = () => {
  const [product, setProduct] = useState({
    name: 'Test Product',
    price: 10.99,
    description: 'This is a test product',
  });

  const handleToken = (token, addresses) => {
    // Send token to server to process payment
    console.log(token, addresses);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <StripeCheckout
        token={handleToken}
        stripeKey="YOUR_STRIPE_PUBLIC_KEY"
        name={product.name}
        description={product.description}
        amount={product.price * 100}
      />
    </div>
  );
};
export default Payment;
