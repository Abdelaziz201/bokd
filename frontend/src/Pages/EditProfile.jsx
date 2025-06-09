import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EditProfile.css';
import { AuthContext } from '../context/AuthContext';

export default function EditProfile() {
  const { user, login } = useContext(AuthContext); // use login to update context after editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || '',
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: 'PUT', // updateUser uses PUT/patch
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Profile updated successfully.');
        login(data.data); // update AuthContext with new user data
        navigate('/account-settings');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <div className='EditProfile-container'>
      <h1 className='EditProfile-h1'>Edit Profile</h1>
      <form className='EditProfile-form' onSubmit={handleSubmit}>
        <div className='EditProfile-field'>
          <label className='EPF-label' htmlFor='username'>Username:</label>
          <input
            className='EPF-inp'
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='EditProfile-field'>
          <label className='EPF-label' htmlFor='firstName'>First Name:</label>
          <input
            className='EPF-inp'
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='EditProfile-field'>
          <label className='EPF-label' htmlFor='lastName'>Last Name:</label>
          <input
            className='EPF-inp'
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='EditProfile-field'>
          <label className='EPF-label' htmlFor='email'>Email:</label>
          <input
            className='EPF-inp'
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='EditProfile-field'>
          <label className='EPF-label' htmlFor='phone'>Phone:</label>
          <input
            className='EPF-inp'
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='EditProfile-btn'>Save Changes</button>
      </form>

      <Link to="/account-settings" className='cncl-btn-link'>
        <button className='EditProfile-btn-cancel'>Cancel</button>
      </Link>
    </div>
  );
}
