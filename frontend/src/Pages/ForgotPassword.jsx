import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ForgotPassword.css';
import logo from '../assets/bokd-high-resolution-logo-transparent.png';


export default function ForgotPassword() {
  //  State to store email input
  const [email, setEmail] = useState('');
  
  // State for feedback messages
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  //  Submit handler to call backend API
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post('http://localhost:5000/api/users/forgot-password', { email }); // 👉 Call backend route //e1
      setMessage('Reset link sent! Please check your email.');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Make sure the email is correct.');
      setMessage('');
    }
  };

  return (
    <div className="FPass-background">
      <div className="FPass-container">
        <Link to="/"><img className="FPass-logo" src={logo} alt="Logo" /></Link>
        <h1>Forgot Password</h1>
        <p>If you have forgotten your password, please enter your email address below. We will send you a link to reset your password.</p>
        
        {/*  Form with submit handler */}
        <form onSubmit={handleSubmit}>
          <input
            className="FPass-inp"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} //  Track input changes
            required
          />
          <button className="FPass-btn" type="submit">Send Reset Link</button>
        </form>

        {/* Show success or error messages */}
        {message && <p className="FPass-success">{message}</p>}
        {error && <p className="FPass-error">{error}</p>}

        <p className='FPass-p'>Remembered your password? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}