// ===========================
// ApplicationsModal.jsx
// ===========================

import React, { useState, useEffect } from 'react';
import './ApplicationsModal.css';

const ApplicationsModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('venue');
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [applications, setApplications] = useState({ venues: [], services: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch venue and service applications from backend on load
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [venueRes, serviceRes] = await Promise.all([
          fetch('/api/Venue/read'),
          fetch('/api/service/read'),
        ]);

        const venueJson = await venueRes.json();
        const serviceJson = await serviceRes.json();

        if (venueJson.success && serviceJson.success) {
          setApplications({
            venues: venueJson.data,
            services: serviceJson.data,
          });
        } else {
          setError('Failed to fetch application data');
        }
      } catch (err) {
        setError('Server error while fetching applications');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Delete application by ID
  const handleDelete = async (id) => {
    const key = activeTab === 'venue' ? 'venues' : 'services';
    const apiUrl = activeTab === 'venue'
      ? `/api/Venue/delete/${id}`
      : `/api/service/delete/${id}`;

    try {
      const res = await fetch(apiUrl, { method: 'DELETE' });
      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || 'Failed to delete application');
      }

      setApplications((prev) => ({
        ...prev,
        [key]: prev[key].filter(app => app._id !== id),
      }));
      setSelectedApplicant(null);
    } catch (err) {
      alert(`Error deleting application: ${err.message}`);
    }
  };

  const list = activeTab === 'venue' ? applications.venues : applications.services;

  // Show loading state
  if (loading) {
    return (
      <div className="applications-modal">
        <div className="modal-content">
          <p>Loading applications...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="applications-modal">
        <div className="modal-content">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="applications-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Submitted Applications</h2>

        {/* Tabs */}
        <div className="tab-buttons">
          <button
            className={activeTab === 'venue' ? 'active' : ''}
            onClick={() => {
              setActiveTab('venue');
              setSelectedApplicant(null);
            }}
          >
            Venue Applications
          </button>
          <button
            className={activeTab === 'service' ? 'active' : ''}
            onClick={() => {
              setActiveTab('service');
              setSelectedApplicant(null);
            }}
          >
            Service Applications
          </button>
        </div>

        {/* Applicant list or selected details */}
        {!selectedApplicant ? (
          <div className="applicant-list">
            {list.map((app) => (
              <div key={app._id} className="applicant-item">
                <span onClick={() => setSelectedApplicant(app)}>{app.name}</span>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(app._id)}
                  title="Delete Application"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="application-details">
            <h3>{selectedApplicant.name}</h3>
            {selectedApplicant.photo && (
              <img
                src={`https://bokd.onrender.com${selectedApplicant.photo}`}
                alt={selectedApplicant.name}
                className="application-photo"
                
              />

            )}

            <p><strong>Description:</strong> {selectedApplicant.description}</p>
            <p><strong>Capacity:</strong> {selectedApplicant.capacity}</p>
            {activeTab === 'service' && (
              <p><strong>Price:</strong> {selectedApplicant.price}</p>
            )}
            <p><strong>Email:</strong> {selectedApplicant.email}</p>
            <p><strong>Phone:</strong> {selectedApplicant.phone}</p>
            {activeTab === 'venue' && (
              <p><strong>Address:</strong> {selectedApplicant.location}</p>
            )}
            <button onClick={() => setSelectedApplicant(null)} className="back-btn">
              ← Back to List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationsModal;




