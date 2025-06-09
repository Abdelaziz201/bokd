// ===========================
// UserApplications.jsx
// ===========================

import React, { useEffect, useState } from 'react';
import './UserApplications.css';

// Dummy data (can be replaced with real API data)


const UserApplications = ({ onConfirm, onDelete }) => {
  const [selected, setSelected] = useState(null);
  const [applications, setApplications] = useState([]);


  // Fetch applications from backend
  const fetchAllReservations = async () => {
    try {
      const res = await fetch('/api/reservation', {
        method: 'GET',});
      const data = await res.json();

      if (res.ok) {
        setApplications(data.data);
      } else {
        console.error("Failed to fetch applications:", data.message);
      }
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  useEffect(() => {
    fetchAllReservations();
  }, []);


  // Helper function to update application status
  const updateStatus = async (newStatus) => {
  try {
    const res = await fetch(`/api/reservation/${selected._id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    });

    const result = await res.json();

    if (res.ok) {
      setApplications(applications.map(app =>
        app._id === selected._id ? { ...app, status: newStatus } : app
      ));
      setSelected({ ...selected, status: newStatus });
    } else {
      console.error("Failed to update status:", result.message);
    }
  } catch (err) {
    console.error("Error updating status:", err);
  }
};

  const handleConfirm = async () => {
    if (selected) {
      try {
        // Show success message immediately
        alert('Booking approved! An email notification will be sent to the user.');
        
        // Update UI immediately
        setApplications(applications.map(app =>
          app._id === selected._id ? { ...app, status: 'approved' } : app
        ));
        setSelected({ ...selected, status: 'approved' });

        // Send request to backend
        const res = await fetch(`/api/reservation/${selected._id}/status`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'approved' }),
        });

        const result = await res.json();

        if (!res.ok) {
          console.error("Failed to update status:", result.message);
          alert('Failed to approve booking. Please try again.');
        }
      } catch (err) {
        console.error("Error updating status:", err);
        alert('An error occurred while approving the booking.');
      }
    }
  };

  const handleReject = async () => {
    if (selected) {
      try {
        // Show success message immediately
        alert('Booking rejected! An email notification will be sent to the user.');
        
        // Update UI immediately
        setApplications(applications.map(app =>
          app._id === selected._id ? { ...app, status: 'rejected' } : app
        ));
        setSelected({ ...selected, status: 'rejected' });

        // Send request to backend
        const res = await fetch(`/api/reservation/${selected._id}/status`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: 'rejected' }),
        });

        const result = await res.json();

        if (!res.ok) {
          console.error("Failed to update status:", result.message);
          alert('Failed to reject booking. Please try again.');
        }
      } catch (err) {
        console.error("Error updating status:", err);
        alert('An error occurred while rejecting the booking.');
      }
    }
  };

  const handleDelete = async () => {
    if (!selected?._id) return;

    try {
      const res = await fetch(`/api/reservation/${selected._id}`, {
        method: 'DELETE',
      });

      const result = await res.json();

      if (res.ok) {
        setApplications(applications.filter(app => app._id !== selected._id));
        setSelected(null);
        if (onDelete) onDelete(selected.fullName);
      } else {
        console.warn("Failed to delete:", result.message);
      }
    } catch (err) {
      console.error("Error deleting reservation:", err);
    }
  };

  return (
    <div className="user-event-requests">
      <h2>User Event Requests</h2>

      {/* LIST VIEW */}
      {!selected ? (
        <ul className="user-event-list">
          {applications.map((app, idx) => (
            <li
              key={app.id || idx}
              style={{ opacity: app.status === 'rejected' ? 0.5 : 1 }}
              onClick={() => setSelected(app)}
            >
              <div className="user-event-row">
                <span className="user-event-type">{app.eventType}</span>
                <span className="user-event-name">{app.fullName}</span>
                {app.status === 'approved' && (
                  <span className="user-event-status approved">Approved</span>
                )}
                {app.status === 'rejected' && (
                  <span className="user-event-status rejected">Rejected</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        /* DETAILS VIEW */
        <div className="user-event-details" style={{ position: 'relative' }}>
          <h3>{selected.fullName}</h3>
          <p><strong>Event Type:</strong> {selected.eventType}</p>
          <p><strong>Venue:</strong> {selected.eventVenue}</p>
          <p><strong>Guests:</strong> {selected.numberOfGuests}</p>
          <p><strong>Date:</strong> {selected.date}</p>
          <p><strong>Time:</strong> {selected.time}</p>
          <p><strong>Email:</strong> {selected.email}</p>
          <p><strong>Phone:</strong> {selected.phone}</p>
          <p><strong>Additional Notes:</strong> {selected.additionalNotes}</p>

          {selected.status === 'approved' && (
            <p className="user-event-status approved"><strong>This application was approved.</strong></p>
          )}
          {selected.status === 'rejected' && (
            <p className="user-event-status rejected"><strong>This application was rejected.</strong></p>
          )}

          <div className="user-event-actions" style={{ justifyContent: 'flex-start' }}>
            <button className="back" onClick={() => setSelected(null)}>← Back</button>
            {selected.status === 'pending' && (
              <>
                <button className="confirm" onClick={handleConfirm}>✅ Approve</button>
                <button className="delete" onClick={handleReject}>❌ Reject</button>
              </>
            )}
          </div>

          <button
            className="user-event-trash-btn user-event-details-trash"
            title="Delete Application"
            onClick={handleDelete}
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export default UserApplications;
