import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import "./booking.css";
import axios from "axios";

const Booking = () => {
  const location = useLocation();
  const eventType = location.state?.eventType;
  const eventVenue = location.state?.eventVenue;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Prepare data with EXACT field names matching your schema
      const bookingData = {
        fullName: formData.name,  // Must match schema exactly
        email: formData.email,
        phone: formData.phone,
        eventType: eventType,
        eventVenue: eventVenue,
        numberOfGuests: Number(formData.guests), // Convert to number
        date: new Date(formData.date).toISOString(), // Format as ISO string
        time: formData.time,
        additionalNotes: formData.notes,
        status: 'pending' // Add initial status
      };

      // API call to your backend
      const response = await axios.post(
        "https://bokd.onrender.com/api/reservation", 
        bookingData
      );

      // Clear form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
        time: "",
        notes: ""
      });

      alert("🎉 Booking request submitted! You will receive a confirmation email shortly.");

    } catch (error) {
      const errorMsg = error.response?.data?.message || 
                      error.message || 
                      "Booking failed. Please try again.";
      setErrorMessage(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;
  
  return (
    <div className="booking-wrapper">
      <div className="booking-card">
        <h2>Reserve Your Venue</h2>
        
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="form-group">
            <label>Number of Guests</label>
            <input 
              type="number" 
              name="guests" 
              value={formData.guests} 
              onChange={handleChange} 
              min="1" 
              required 
            />
          </div>

          <div className="form-inline">
            <div className="form-group">
              <label>Date</label>
              <input 
                type="date" 
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required 
                min={minDate}
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input 
                type="time" 
                name="time" 
                value={formData.time} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Additional Notes</label>
            <textarea 
              name="notes" 
              value={formData.notes} 
              onChange={handleChange} 
              rows="3" 
              placeholder="Any special requests?" 
            />
          </div>

          <button class="book-pbtn"
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;