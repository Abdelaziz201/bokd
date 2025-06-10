import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ResetPassword.css'; 

export default function ResetPassword() {
    const { token } = useParams(); // Get token from URL
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            setIsError(true);
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(
                `https://bokd.onrender.com/api/users/reset-password/${token}`,
                { newPassword }
            );

            setMessage(response.data.message);
            setIsError(false);

            // Optionally redirect after success
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setMessage(
                error.response?.data?.message || 'Something went wrong'
            );
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='CP-container'>
        <h1 className='CP-h1'>Reset Your Password</h1>
        {message && (
                <p style={{ color: isError ? 'red' : 'green' }}>{message}</p>
            )}
        <form onSubmit={handleSubmit} className='CP-form'> 
            <div className='CP-field'>
            <label htmlFor="new-password" className='CP-label'>New Password</label>
            <input 
                type="password" 
                id="new-password" 
                className='CP-input' 
                placeholder='Enter Your New Password' 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required 
            />
            </div>
            <div className='CP-field'>
            <label htmlFor="confirm-password" className='CP-label'>Confirm New Password</label>
            <input 
                type="password" 
                id="confirm-password" 
                className='CP-input' 
                placeholder='Enter Your New Password Again' 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
            />
            </div>
            <button type="submit" className='CP-btn'disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Reset Password'}
            </button>
        </form>
      
    </div>
    );
}
