import React, { useState } from 'react';

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleNameOnCardChange = (event) => {
    setNameOnCard(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Payment processed!');
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        <h3>Payment Methods</h3>
        <div>
          <input
            type="radio"
            id="credit-debit-card"
            name="payment-method"
            value="credit-debit-card"
            checked={selectedPaymentMethod === 'credit-debit-card'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="credit-debit-card">Credit/Debit Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="net-banking"
            name="payment-method"
            value="net-banking"
            checked={selectedPaymentMethod === 'net-banking'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="net-banking">Net Banking</label>
        </div>
        <div>
          <input
            type="radio"
            id="wallet"
            name="payment-method"
            value="wallet"
            checked={selectedPaymentMethod === 'wallet'}
            onChange={handlePaymentMethodChange}
          />
          <label htmlFor="wallet">Wallet</label>
        </div>

        {selectedPaymentMethod === 'credit-debit-card' && (
          <div>
            <h3>Card Details</h3>
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
            <br />
            <input
              type="text"
              placeholder="Expiration Date"
              value={expirationDate}
              onChange={handleExpirationDateChange}
            />
            <br />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={handleCvvChange}
            />
            <br />
            <input
              type="text"
              placeholder="Name on Card"
              value={nameOnCard}
              onChange={handleNameOnCardChange}
            />
          </div>
        )}

        <h3>Billing Address</h3>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={handleAddressChange}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={handleCityChange}
        />
        <br />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={handleStateChange}
        />
        <br />
        <input
          type="text"
          placeholder="Zip"
          value={zip}
          onChange={handleZipChange}
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
