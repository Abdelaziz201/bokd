import React, { useState } from 'react';
import './TicketsBooking.css'
import { useNavigate } from 'react-router-dom';

export default function TicketsBooking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zoneId: ''
  });
  
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // First, try to book the ticket
      const bookingRes = await fetch('/api/tickets/book', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!bookingRes.ok) {
        const errorData = await bookingRes.json();
        throw new Error(errorData.message || 'Failed to book ticket');
      }

      const bookingData = await bookingRes.json();
      
      if (bookingData.success) {
        setMessage('Ticket booked successfully! Proceeding to payment...');
        
        // Store booking data in localStorage for payment page
        localStorage.setItem('bookingData', JSON.stringify({
          ...formData,
          ticketId: bookingData.data.ticketId
        }));
        
        // Navigate to payment page after a short delay
        setTimeout(() => navigate('/payment'), 1500);
      } else {
        throw new Error(bookingData.message || 'Failed to book ticket');
      }
    } catch (err) {
      console.error('Booking error:', err);
      setMessage(err.message || 'Failed to book ticket. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className='TB-container'>
      <div className='TB-card'>
        <h2 className='TB-h2'>Buy Your Ticket</h2>
        <form className="TB-form" onSubmit={handleSubmit}>
          <div className='TB-form-group'>
            <label className='TB-labe'>Full Name</label>
            <input 
              className='TB-inp'
              type="text" 
              name="fullName" 
              value={formData.fullName}
              onChange={handleChange}
              placeholder='Name Surname' 
              required 
            />
          </div>

          <div className='TB-form-group'>
            <label className='TB-labe'>Email Address</label>
            <input 
              className='TB-inp' 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder='sample@email.com' 
              required 
            />
          </div>

          <div className='TB-form-group'>
            <label className='TB-labe'>Phone Number</label>
            <input 
              className='TB-inp' 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder='+90 500000 00 00'
              required 
            />
          </div>

          <div className='TB-form-group'>
            <label className='TB-labe'>Ticket Zone</label>
            <select 
              className='TB-sel' 
              name="zoneId" 
              value={formData.zoneId}
              onChange={handleChange}
              required
            > 
              <option value="" disabled>Select Zone</option>
              <option value="1">Front Zone (1) - 1000 TL</option>
              <option value="2">Middle Zone (2) - 700 TL</option>
              <option value="3">Back Zone (3) - 400 TL</option>
            </select>
          </div>

          <button 
            type="submit" 
            className='TB-book-btn'
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Buy Ticket'}
          </button>
        </form>
        {message && (
          <p className={`message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
