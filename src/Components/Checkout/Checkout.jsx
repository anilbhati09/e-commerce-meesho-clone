import React, { useState } from 'react';
import './Checkout.css';

const CheckoutPage = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [errors, setErrors] = useState({});

  const handleCardholderNameChange = (e) => {
    setCardholderName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const errors = {};
    if (!cardholderName) {
      errors.cardholderName = 'Cardholder name is required';
    }
    if (!cardNumber) {
      errors.cardNumber = 'Card number is required';
    }
    if (!expirationDate) {
      errors.expirationDate = 'Expiration date is required';
    }
    if (!cvv) {
      errors.cvv = 'CVV is required';
    }

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      // Proceed with payment logic
      console.log('Payment successful!');
    } else {
      // Set the errors state
      setErrors(errors);
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-heading">Payment Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Cardholder Name:</label>
          <input
            type="text"
            className="form-input"
            value={cardholderName}
            onChange={handleCardholderNameChange}
          />
          {errors.cardholderName && (
            <span className="error-message">{errors.cardholderName}</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Card Number:</label>
          <input
            type="text"
            className="form-input"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          {errors.cardNumber && (
            <span className="error-message">{errors.cardNumber}</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">Expiration Date:</label>
          <input
            type="text"
            className="form-input"
            value={expirationDate}
            onChange={handleExpirationDateChange}
          />
          {errors.expirationDate && (
            <span className="error-message">{errors.expirationDate}</span>
          )}
        </div>
        <div className="form-group">
          <label className="form-label">CVV:</label>
          <input
            type="text"
            className="form-input"
            value={cvv}
            onChange={handleCVVChange}
          />
          {errors.cvv && (
            <span className="error-message">{errors.cvv}</span>
          )}
        </div>
        <button type="submit" className="checkout-button">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
