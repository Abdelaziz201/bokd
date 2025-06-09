import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthContext' //backend
import './AccountSettings.css'
import { useContext } from 'react' //backend


export default function AccountSettings() { 
  const { user, logout } = useContext(AuthContext); //backend
  const navigate = useNavigate(); // backend
  
  const handleDelete = async () => { //backend function

      if (!window.confirm('Are you sure you want to delete your account?')) return;
  
  try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Account deleted successfully.');
        logout(); // Clears context + localStorage
        navigate('/'); // Redirect to homepage or login
      } else {
        const data = await response.json();
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Failed to delete account:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <div className='AS-container'>
      <h1 className='AS-h1'>Account Settings</h1>
      
        <div className='AS-section'>
          <h2 className='AS-h2'>Profile Information</h2>
          <div className='AS-content'>
          <p className='AS-p'><strong>Username: </strong>{user?.username}</p>
          <p className='AS-p'><strong>Full Name: </strong>{user?.firstName} {user?.lastName}</p>
          <p className='AS-p'><strong>Email: </strong>{user?.email}</p>
          <p className='AS-p'><strong>Phone: </strong>{user?.phone}</p>
          <Link to="/account-settings/edit-profile" className='AS-Link'><button className='AS-btn'>Edit Profile</button></Link>

          </div>
        <div className='AS-section'>
            <h2 className='AS-h2'>Manage Account</h2>
            <div className='AS-content'>
                <Link to="/account-settings/change-password" className='AS-Link'><button className='AS-btn'>Change Password</button></Link>
                <button className='AS-btn-d' onClick={handleDelete}>Delete Account</button>

            </div>
          </div>
        </div>
    </div>
  );
}
