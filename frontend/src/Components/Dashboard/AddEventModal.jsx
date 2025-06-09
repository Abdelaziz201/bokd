// ============================
// AddEventModal.jsx
// ============================

import React, { useState, useEffect } from 'react';


// This component is a modal for adding a new event
const AddEventModal = ({ onClose, onAddEvent, categories }) => {
  const [isLoading, setIsLoading] = useState(false);
  // Form data state to track input values
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    date: '',
    categories: [],
    price: '',
    status: 'Draft' 
  });

  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Function to validate all fields before submission
  const validateForm = () => {
    const newErrors = {};

    // Check each field and add a message if it's empty or invalid
    if (!formData.name.trim()) newErrors.name = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (formData.categories.length === 0) newErrors.categories = 'Select at least one category';
    if (!formData.price) newErrors.price = 'Price is required (enter 0 for free)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If no errors, return true
  };

  // When the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/Event/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          date: new Date(formData.date).toISOString(),
          location: formData.location,
          categories: formData.categories,
          price: parseFloat(formData.price) || 0,
          status: formData.status
        })
      });

      const result = await response.json();

      if (response.ok) {
        onAddEvent(result.data); // Pass the MongoDB event to Dashboard
        onClose(); // Close the modal
      } else {
        alert(result.message || "Failed to add event.");
      }
    } catch (err) {
      console.error("Error adding event:", err);
      alert("Something went wrong.");
    }
    finally {
    setIsLoading(false);  // ➡️ Ensure loading state ends
    }
  }
};

// Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Close Button */}
        <button onClick={onClose} className="close-btn">X</button>

        <h2>Add New Event</h2>

        {/* Event Form */}
        <form onSubmit={handleSubmit}>

          {/* Title Input */}
          <div className="form-group">
            <label>Title</label>
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isLoading} 
              className={errors.name ? 'error-field' : ''}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          {/* Description Input */}
          <div className="form-group">
            <label>Description</label>
            <input 
              type="text"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
               disabled={isLoading} 
              className={errors.description ? 'error-field' : ''}
            />
            {errors.description && <div className="error-message">{errors.description}</div>}
          </div>

          {/* Date Input */}
          <div className="form-group">
            <label>Date</label>
            <input 
              type="date"
              value={formData.date}
              min={minDate}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
               disabled={isLoading} 
              className={errors.date ? 'error-field' : ''}
            />
            {errors.date && <div className="error-message">{errors.date}</div>}
          </div>

          {/* Location Input */}
          <div className="form-group">
            <label>Location</label>
            <input 
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
               disabled={isLoading} 
              className={errors.location ? 'error-field' : ''}
            />
            {errors.location && <div className="error-message">{errors.location}</div>}
          </div>

          {/* Category Selection */}
          <div className="form-group">
            <label>Category</label>
            <div className="category-cards">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`category-card ${formData.categories.includes(category) ? 'selected' : ''}`}
                  onClick={() => {
                     if (isLoading) return;
                    const isSelected = formData.categories.includes(category);
                    const updatedCategories = isSelected
                      ? formData.categories.filter(cat => cat !== category)
                      : [...formData.categories, category];
                    setFormData({ ...formData, categories: updatedCategories });
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
            {errors.categories && <div className="error-message">{errors.categories}</div>}
          </div>

          {/* Price Input */}
          <div className="form-group">
            <label>Price</label>
            <input 
              type="number"
              min="0"
              step="0.01"
              placeholder="0 for free events"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
               disabled={isLoading} 
              className={errors.price ? 'error-field' : ''}
            />
            {errors.price && <div className="error-message">{errors.price}</div>}
          </div>

          {/* Status Dropdown */}
          <div className="form-group">
            <label>Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
               disabled={isLoading} 
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit"
          disabled={isLoading} // ➡️ Disable during loading
           className="submit-btn"
           >
            {isLoading ? ( // ➡️ Show loading state
              <>
                <span className="spinner"></span> Saving...
              </>
            ) : (
              'Add Event'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEventModal;
