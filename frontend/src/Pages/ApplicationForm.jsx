

import React, { useState } from 'react';
import './ApplicationForm.css';
import uploadPhoto from '../assets/upload photo.jpg';

// Labels for checkbox tags
const TAG_LABELS = {
  private: 'Private',
  catering: 'Catering Service Available',
  outdoors: 'Outdoors',
  petFriendly: 'Pet Friendly'
};

const ApplicationForm = () => {
  // Manage which tab is active: 'venue' or 'service'
  const [activeTab, setActiveTab] = useState('venue');

  // All form field values stored in one object
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    email: '',
    phone: '',
    address: '',
    tags: {
      private: false,
      catering: false,
      outdoors: false,
      petFriendly: false
    },
    capacity: '',
    photo: null
  });

  // Handle input and checkbox changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Update checkbox value inside tags
      setFormData(prev => ({
        ...prev,
        tags: { ...prev.tags, [name]: checked }
      }));
    } else {
      // Update regular text/email/phone inputs
      setFormData(prev => ({ ...prev, [name]: value }));
      
    }
  };

  // Handle form submission
 const handleSubmit = async (e) => {
  e.preventDefault();

  const requiredFields = ['name', 'description', 'email', 'phone', 'tags'];
  const missingFields = requiredFields.filter(field => {
    if (field === 'tags') {
      return !formData.tags || Object.values(formData.tags).every(val => !val);
    }
    return !formData[field]?.trim();
  });

  if (missingFields.length) {
    alert(`Please fill in: ${missingFields.join(', ')}`);
    return;
  }

  try {
    const data = new FormData();
    
    // Append all fields
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('type', activeTab);
    data.append('capacity', formData.capacity || '');
    data.append('tags', JSON.stringify(Object.keys(formData.tags).filter(tag => formData.tags[tag])));

    if (activeTab === 'venue') {
      data.append('location', formData.address);
    }

    if (formData.photo) {
      data.append('photo', formData.photo);
      
    }

    const endpoint = activeTab === 'venue' ? '/api/Venue' : '/api/service';

    // Add debugging
    console.log('Sending to:', endpoint);
    console.log('FormData entries:');
    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      body: data
    });

    // First check the response status
    if (!response.ok) {
      // Try to get error details
      const errorText = await response.text();
      console.error('Server responded with:', errorText);
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    // Then try to parse as JSON
    const result = await response.json();
    console.log('Success:', result);
    
    alert(`${activeTab === 'venue' ? 'Venue' : 'Service'} submitted successfully!`);

    // Reset form
    setFormData({
      name: '',
      description: '',
      email: '',
      phone: '',
      address: '',
      tags: {
        private: false,
        catering: false,
        outdoors: false,
        petFriendly: false
      },
      capacity: '',
      photo: null
    });

  } catch (error) {
    console.error('Full error:', error);
    alert(error.message || 'An error occurred during submission');
  }
};
  return (
    <div className="application-form">
      <div className="form-page">
        {/* Form Section */}
        <div className="form-container">
          <h1>Application Form</h1>

          {/* Tabs for Venue / Service */}
          <div className="form-header">
            <span
              className={activeTab === 'venue' ? 'active-tab' : ''}
              onClick={() => setActiveTab('venue')}
            >
              Venue
            </span>
            <span
              className={activeTab === 'service' ? 'active-tab' : ''}
              onClick={() => setActiveTab('service')}
            >
              Service
            </span>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="form-group">
              <h2>{activeTab === 'venue' ? "Venue's Name" : "Service Name"}</h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={`Enter the ${activeTab}'s name`}
              />
            </div>

            {/* Description Input */}
            <div className="form-group">
              <h2>{activeTab === 'venue' ? "Venue's Description" : "Service Description"}</h2>
              <p className="hint-text">Describe {activeTab} briefly...</p>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder={`Enter the ${activeTab}'s description`}
              />
            </div>

            {/* Checkbox Tags */}
            <div className="form-group">
              <h2>{activeTab === 'venue' ? "Venue's Tags" : "Service's Tags"}</h2>
              {Object.entries(formData.tags).map(([key, value]) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    name={key}
                    checked={value}
                    onChange={handleChange}
                  />
                  {TAG_LABELS[key]}
                </label>
              ))}
            </div>
            {/* Capacity Input */}
            <div className="form-group">
                <h2>Capacity</h2>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity || ''}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  placeholder="Enter the capacity"/>
            </div>

            {/* Contact Details */}
            <div className="form-group">
              <h2>Contacts{activeTab === 'venue' ? ' & Location' : ''}</h2>

              <h3>Email address</h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <h3>Phone</h3>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />

              {/* Address only shown if active tab is 'venue' */}
              {activeTab === 'venue' && (
                <>
                  <h3>Address</h3>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter the venue address"
                  />
                </>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Upload Image Section */}
        <div className="upload-section">
          <div className="upload-preview">
            {/* Blurred preview image */}
            <img src={uploadPhoto} alt="Upload Preview" />

            {/* Upload button positioned in the center */}
            <label className="upload-button">
              <span>Upload a photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFormData({ ...formData, photo: file });
                    alert(`Photo "${file.name}" uploaded successfully!, ONLY one photo can be uploaded`);
                  }
                }}              
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
