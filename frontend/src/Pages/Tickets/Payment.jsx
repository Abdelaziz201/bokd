import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Payment.css'

export default function Payment() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [paymentData, setPaymentData] = useState({
    nameSurname: '',
    cardNumber: '',
    expirationDate: '',
    cvc: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Get booking data from localStorage
    const storedData = localStorage.getItem('bookingData');
    if (!storedData) {
      navigate('/tickets'); // Redirect if no booking data
      return;
    }
    setBookingData(JSON.parse(storedData));
  }, [navigate]);

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setPaymentData(prev => ({
      ...prev,
      expirationDate: value.slice(0, 5)
    }));
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Format with spaces every 4 digits
    if (value.length > 0) {
      value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    
    setPaymentData(prev => ({
      ...prev,
      cardNumber: value
    }));
  };

  const validateCardNumber = (cardNumber) => {
    // Remove spaces for validation
    const cleanNumber = cardNumber.replace(/\s/g, '');
    
    // Check if it's a valid length (16 digits)
    if (cleanNumber.length !== 16) {
      return false;
    }
    
    // Check if it starts with valid prefixes (4 for Visa, 5 for MasterCard, 2 for MasterCard)
    const firstDigit = cleanNumber.charAt(0);
    const secondDigit = cleanNumber.charAt(1);
    
    // Visa starts with 4
    if (firstDigit === '4') {
      return true;
    }
    
    // MasterCard starts with 5 or 2
    if (firstDigit === '5' || (firstDigit === '2' && secondDigit >= '2' && secondDigit <= '7')) {
      return true;
    }
    
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Validate card number before submission
    if (!validateCardNumber(paymentData.cardNumber)) {
      setMessage('Please enter a valid Visa (4xxx...) or MasterCard (5xxx... / 2xxx...) number');
      setIsLoading(false);
      return;
    }

    try {
      // Format card number (remove spaces)
      const formattedCardNumber = paymentData.cardNumber.replace(/\s/g, '');
      // Format expiration date (remove slash)
      const formattedExpiry = paymentData.expirationDate.replace(/\//g, '');
      
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...paymentData,
          cardNumber: formattedCardNumber,
          expirationDate: formattedExpiry,
          bookingData // Include the booking data
        }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Payment failed');
      }

      if (data.success) {
        setMessage('Payment successful! Your ticket has been sent to your email.');
        // Clear booking data from localStorage
        localStorage.removeItem('bookingData');
        // Redirect to home or confirmation page after a delay
        setTimeout(() => navigate('/'), 2000);
      } else {
        throw new Error(data.message || 'Payment failed');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setMessage(err.message || 'Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='payment-container'>
      <h1 className='payment-title'>Payment</h1>
      <div className='payment-content'>
        <p className='payment-description'>Please enter your payment details below to complete your booking.</p>
        <form className='payment-form' onSubmit={handleSubmit}>
          <label className='PF-label' htmlFor='cardNumber'>Card Number:</label>
          <input 
            className='PF-inp' 
            type='text' 
            id='cardNumber' 
            name='cardNumber' 
            value={paymentData.cardNumber}
            onChange={handleCardNumberChange}
            placeholder='1234 5678 9012 3456'
            maxLength={19}
            required 
          />

          <label className='PF-label' htmlFor='nameSurname'>Card Holder Name:</label>
          <input 
            className='PF-inp' 
            type='text' 
            id='nameSurname' 
            name='nameSurname' 
            value={paymentData.nameSurname}
            onChange={handleChange}
            placeholder='John Doe'
            required 
          />

          <label className='PF-label' htmlFor='expirationDate'>Expiry Date (MM/YY):</label>
          <input
            className='PF-inp'
            type='text'
            id='expirationDate'
            name='expirationDate'
            required
            placeholder='MM/YY'
            value={paymentData.expirationDate}
            onChange={handleExpiryChange}
            maxLength={5}
          />

          <label className='PF-label' htmlFor='cvc'>CVV:</label>
          <input 
            className='PF-inp' 
            type='text' 
            id='cvc' 
            name='cvc' 
            value={paymentData.cvc}
            onChange={handleChange}
            required 
            maxLength={4}
            placeholder='123'
          />
          
          <button 
            className='PF-sub-btn' 
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Pay Now'}
          </button>
        </form>
        {message && (
          <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
