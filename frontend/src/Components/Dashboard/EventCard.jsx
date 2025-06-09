// =====================
// EventCard.jsx
// =====================

import React from 'react';

// A single card that shows event details and provides toggle/delete buttons
const EventCard = ({ event, onToggleStatus, onDelete }) => {
  return (
    <div className="event-card">
      
      
      <div className="event-info">
        <h4>{event.name}</h4>
        <p><strong>Description:</strong> {event.description || 'N/A'}</p>
        <p><strong>Location:</strong> {event.location || 'N/A'}</p>
        <p>
          <strong>Date:</strong>{' '}
          {event.date
            ? new Date(event.date).toLocaleDateString('en-GB')
            : 'Not specified'}
        </p>

        {/* Display Categories if available */}
        <p>
          <strong>Categories:</strong>
          {event.categories?.length > 0 ? (
            <span className="event-categories">{event.categories.join(', ')}</span>
          ) : ' N/A'}
        </p>

        {/* Show price or Free if not set */}
        <p><strong>Price:</strong> {event.price ? `$${parseFloat(event.price).toFixed(2)}` : 'Free'}</p>

        {/* Status Badge */}
        <p>
          <strong>Status:</strong>
          <span className={`status ${event.status.toLowerCase()}`}>
            {event.status}
          </span>
        </p>
      </div>

      {/* Action Buttons (Toggle / Delete) */}
      <div className="event-actions">
        <button
          onClick={() => onToggleStatus(event._id)}
          className="status-toggle"
        >
          Toggle
        </button>
        <button
          onClick={() => onDelete(event._id)}
          className="delete-btn"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default EventCard;
