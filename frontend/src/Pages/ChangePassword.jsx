import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './ChangePassword.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // backend

export default function ChangePassword() { //backend starts here
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState({ text: '', isError: false });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();    

    setIsLoading(true);
    setMessage({ text: '', isError: false });

    try {
      const response = await axios.put(`https://bokd.onrender.com/api/users/change-password/${user.id}`, {
        userId: user.id,
        currentPassword,
        newPassword,
      });

      setMessage({ text: response.data.message || 'Password changed successfully.', isError: false });

       setTimeout(() => { navigate('/'); }, 1500);

    } catch (error) {
      console.error('Error changing password:', error);

      // ✅ [CHANGED] updated error message extraction from axios error object
      const errorMsg = error.response?.data?.message || 'Unexpected error occurred';
      setMessage({ text: errorMsg, isError: true });

    } finally {
      setIsLoading(false);
    }
  }; // backend ends here

  return (
    <div className='CP-container'>
      <h1 className='CP-h1'>Change Password</h1>

      {message.text && (
        <p style={{ color: message.isError ? 'red' : 'green' }}>{message.text}</p>
      )}

      <form className='CP-form' onSubmit={handleSubmit}>
        <div className='CP-field'>
          <label htmlFor="current-password" className='CP-label'>Current Password</label>
          <input
            type="password"
            id="current-password"
            className='CP-input'
            placeholder='Enter Your Current Password'
            required
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className='CP-field'>
          <label htmlFor="new-password" className='CP-label'>New Password</label>
          <input
            type="password"
            id="new-password"
            className='CP-input'
            placeholder='Enter Your New Password'
            required
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>
        <div className='CP-field'>
          <label htmlFor="confirm-password" className='CP-label'>Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            className='CP-input'
            placeholder='Enter Your New Password Again'
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className='CP-btn' disabled={isLoading}>
          {isLoading ? 'Changing...' : 'Change Password'}
        </button>
      </form>
    </div>
  );
}
