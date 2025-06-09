// ==========================
// Dashboard.jsx
// ==========================

import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import EventCard from '../Components/Dashboard/EventCard';
import AddEventModal from '../Components/Dashboard/AddEventModal';
import StatsCard from '../Components/Dashboard/StatsCard';
import ApplicationsModal from '../Components/Dashboard/ApplicationsModal';
import UserApplications from '../Components/Dashboard/UserApplications';
import './dashboard.css';

// Register pie chart dependencies
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = ({ userName = "User" }) => {
  const [events, setEvents] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showApplicationsModal, setShowApplicationsModal] = useState(false);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmedUser, setConfirmedUser] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const categories = [
    "Weddings", "Concerts", "Graduation Parties",
    "Birthday Parties", "Retirement", "Work Meetings",
    "Workshops", "Private Parties", "Seminars"
  ];

  

  // Load events on first load
  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/Event");
      const result = await response.json();

      if (response.ok) {
        setEvents(result.data);
      } else {
        console.error("Failed to fetch events:", result.message);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
  fetchEvents();
}, []);


const searchEvents = async (term) => {
  if (!term.trim()) {
    fetchEvents(); // Reset to all events
    return;
  }

  try {
    const res = await fetch(`/api/search/${term}`);
    if (res.ok) {
      const result = await res.json();
      setEvents(result);
    } else {
      setEvents([]);
    }
  } catch (err) {
    console.error("Search error:", err);
    setEvents([]);
  }
};


  // Save to local storage when events change
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);


  

  // Filtered event list
  const filteredEvents = events.filter(event => {
    if (filter !== 'all' && event.status.toLowerCase() !== filter) return false;
    if (searchTerm && !event.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  // Add event logic
  const handleAddEvent =async (newEvent) => {
  setEvents([...events, newEvent]); // Just update the state
  setShowAddModal(false); // Close modal
};

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}`;
  };

  const handleUserConfirm = (userName) => {
    setConfirmedUser(userName);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Welcome back!</h1>
        <p>Here's what's happening with your events today.</p>
      </div>

      {/* Two-column layout */}
      <div className="main-content">
        {/* LEFT SIDE */}
        <div className="events-section">
          <div className="section-header">
            <h2>Your Events</h2>
            <div className="search-and-add">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => {
                  const term = e.target.value;
                  setSearchTerm(term); // ✅ Update local search state
                  searchEvents(term);  // ✅ Trigger API search
                }}
                className="search-input"
              />
              <button onClick={() => setShowAddModal(true)} className="add-event-btn">
                + Add Event
              </button>
              <button onClick={() => setShowApplicationsModal(true)} className="add-event-btn">
                View Applications
              </button>
            </div>
          </div>

          {/* Filter buttons */}
          <div className="filter-buttons">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
            <button className={`filter-btn ${filter === 'published' ? 'active' : ''}`} onClick={() => setFilter('published')}>Published</button>
            <button className={`filter-btn ${filter === 'draft' ? 'active' : ''}`} onClick={() => setFilter('draft')}>Drafts</button>
          </div>

          {/* Events list */}
          <div className="events-list">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                  onToggleStatus={async (id) => {
                    const eventToUpdate = events.find(e => e._id === id);
                    const updatedStatus = eventToUpdate.status === 'Published' ? 'Draft' : 'Published';

                    try {
                      const response = await fetch(`/api/Event/${id}`, {
                        method: "PUT",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ ...eventToUpdate, status: updatedStatus })
                      });

                      const result = await response.json();

                      if (response.ok) {
                        setEvents(events.map(e => (e._id === id ? result.data : e)));
                      } else {
                        console.error("Failed to update event status");
                      }
                    } catch (error) {
                      console.error("Error updating event:", error);
                    }
                  }}
                  onDelete={async (id) => {
                    try {
                      const response = await fetch(`/api/events/delete/${id}`, {
                        method: "DELETE"
                      });

                      if (response.ok) {
                        setEvents(events.filter(e => e._id !== id)); // MongoDB uses _id
                      } else {
                        console.error("Failed to delete event");
                      }
                    } catch (error) {
                      console.error("Error deleting event:", error);
                    }
                  }}
                />
              ))
            ) : (
              <p className="no-events">No events found</p>
            )}
          </div>

          {/* User confirm success message */}
          {showConfirmation && (
            <div className="success-message">
              ✅ {confirmedUser} has been confirmed successfully.
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="right-side">
          <StatsCard
            totalEvents={events.length}
            publishedEvents={events.filter(e => e.status === 'Published').length}
          />

          {/* UserApplications moved here */}
          <UserApplications onConfirm={handleUserConfirm} />
        </div>
      </div>

      {/* Modals */}
      {showAddModal && (
        <AddEventModal
          onClose={() => setShowAddModal(false)}
          onAddEvent={handleAddEvent}
          categories={categories}
        />
      )}

      {showApplicationsModal && (
        <ApplicationsModal
          onClose={() => setShowApplicationsModal(false)}
          
        />
      )}
    </div>
  );
};

export default Dashboard;
