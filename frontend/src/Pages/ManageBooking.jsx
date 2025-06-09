import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import './ManageBooking.css';
import { AuthContext } from '../context/AuthContext';

export default function ManageBooking() {
  const { user } = useContext(AuthContext);
  const [tickets, setTickets] = useState([]);
  const [venueReservations, setVenueReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    // Fetch ticket bookings
    axios.get(`/api/tickets/user/${user.email}`)
      .then(res => {
        if (res.data.success) {
          setTickets(res.data.data);
        } else {
          console.error(res.data.message);
        }
      })
      .catch(err => console.error('Error fetching tickets:', err));

    // Fetch venue bookings
    axios.get(`/api/reservation/user/${user.email}`)
      .then(res => {
        if (res.data.success) {
          setVenueReservations(res.data.data);
        } else {
          console.error(res.data.message);
        }
      })
      .catch(err => console.error('Error fetching venue reservations:', err))
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <div className='MB-container'>
      <h1 className='MB-h1'>Manage your Booking</h1>
      <p className='MB-p'>Here you can manage your bookings.</p>

      {/* Ticket Bookings Section */}
      <div className='MB-content'>
        <h2 className='MB-h2'>Tickets Booking</h2>
        <p className='MB-p'>Manage your ticket bookings here.</p>

        <div className='MB-tickets'>
          <h3 className='MB-h3'>Your Bookings:</h3>

          {loading ? (
            <p className='MB-booking-p'>Loading...</p>
          ) : !user ? (
            <p className='MB-booking-p'>Please log in to view your bookings.</p>
          ) : tickets.length === 0 ? (
            <p className='MB-booking-p'>No bookings found.</p>
          ) : (
            tickets.map(ticket => (
              <div key={ticket._id} className='MB-booking'>
                <p className='MB-booking-p'><strong>Full Name:</strong> {ticket.fullName}</p>
                <p className='MB-booking-p'><strong>Zone:</strong> {ticket.zone}</p>
                <p className='MB-booking-p'><strong>Price:</strong> ${ticket.price}</p>
                <p className='MB-booking-p'><strong>Status:</strong> {ticket.status}</p>
                <p className='MB-booking-p'><strong>Date:</strong> {new Date(ticket.bookingDate).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Venue Bookings Section */}
      <div className='MB-content'>
        <h2 className='MB-h2'>Venue Booking</h2>
        <p className='MB-p'>Manage your venue bookings here.</p>

        <div className='MB-venues'>
          <h3 className='MB-h3'>Your Bookings:</h3>

          {loading ? (
            <p className='MB-booking-p'>Loading...</p>
          ) : !user ? (
            <p className='MB-booking-p'>Please log in to view your bookings.</p>
          ) : venueReservations.length === 0 ? (
            <p className='MB-booking-p'>No bookings found.</p>
          ) : (
            venueReservations.map(res => (
              <div key={res._id} className='MB-booking'>
                <p className='MB-booking-p'><strong>Full Name:</strong> {res.fullName}</p>
                <p className='MB-booking-p'><strong>Event Type:</strong> {res.eventType}</p>
                <p className='MB-booking-p'><strong>Venue:</strong> {res.eventVenue}</p>
                <p className='MB-booking-p'><strong>Date:</strong> {res.date}</p>
                <p className='MB-booking-p'><strong>Time:</strong> {res.time}</p>
                <p className='MB-booking-p'><strong>Status:</strong> {res.status}</p>
                <p className='MB-booking-p'><strong>Guests:</strong> {res.numberOfGuests}</p>
                {res.additionalNotes && (
                  <p className='MB-booking-p'><strong>Notes:</strong> {res.additionalNotes}</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
