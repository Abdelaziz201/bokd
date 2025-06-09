import Reservation from "../models/venuereservation.model.js";
import { format } from 'date-fns';
import nodemailer from 'nodemailer';

// Email sending function
const sendBookingEmail = async (email, bookingData, status = 'pending') => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let subject, text;
  
  if (status === 'pending') {
    subject = '🎉 Your Booking Request Has Been Received';
    text = `
Dear ${bookingData.fullName},

Thank you for your booking request with BOKD. Here are your booking details:

Event Type: ${bookingData.eventType}
Venue: ${bookingData.eventVenue}
Date: ${format(new Date(bookingData.date), 'yyyy-MM-dd')}
Time: ${bookingData.time}
Number of Guests: ${bookingData.numberOfGuests}

Status: Pending Approval

We will review your request and get back to you shortly. You will receive another email once your booking is approved or rejected.

Best regards,
BOKD Team
    `;
  } else if (status === 'approved') {
    subject = '✅ Your Booking Has Been Approved!';
    text = `
Dear ${bookingData.fullName},

Great news! Your booking request has been approved. Here are your booking details:

Event Type: ${bookingData.eventType}
Venue: ${bookingData.eventVenue}
Date: ${format(new Date(bookingData.date), 'yyyy-MM-dd')}
Time: ${bookingData.time}
Number of Guests: ${bookingData.numberOfGuests}

Status: Approved ✅

We look forward to hosting your event!

Best regards,
BOKD Team
    `;
  } else if (status === 'rejected') {
    subject = '❌ Booking Request Update';
    text = `
Dear ${bookingData.fullName},

We regret to inform you that your booking request could not be approved at this time. Here are your booking details:

Event Type: ${bookingData.eventType}
Venue: ${bookingData.eventVenue}
Date: ${format(new Date(bookingData.date), 'yyyy-MM-dd')}
Time: ${bookingData.time}
Number of Guests: ${bookingData.numberOfGuests}

Status: Rejected ❌

Please feel free to contact us for alternative dates or venues.

Best regards,
BOKD Team
    `;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
};

const createReservation = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      eventType,
      eventVenue,
      numberOfGuests,
      date,
      time,
      additionalNotes
    } = req.body;

    // Updated validation - only checking essential fields
    if (!fullName || !email || !eventType || !numberOfGuests || !date || !time) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    // Create reservation with eventType and initial status
    const reservation = await Reservation.create({
      fullName,
      email,
      phone,
      eventType,
      eventVenue,
      numberOfGuests: parseInt(numberOfGuests),
      date: new Date(date),
      time,
      additionalNotes,
      status: 'pending' // Add initial status
    });

    // Send confirmation email
    await sendBookingEmail(email, reservation._doc);

    // Format response
    const responseData = {
      ...reservation._doc,
      date: format(reservation.date, 'yyyy-MM-dd'),
      createdAt: format(reservation.createdAt, 'yyyy-MM-dd HH:mm'),
      updatedAt: format(reservation.updatedAt, 'yyyy-MM-dd HH:mm')
    };

    res.status(201).json({
      success: true,
      data: responseData,
      message: "Reservation created successfully"
    });

  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error",
      error: error.message 
    });
  }
};


const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({});
    
    const formattedReservations = reservations.map(reservation => ({
      ...reservation._doc,
      date: format(reservation.date, 'yyyy-MM-dd'),
      createdAt: format(reservation.createdAt, 'yyyy-MM-dd HH:mm'),
      updatedAt: format(reservation.updatedAt, 'yyyy-MM-dd HH:mm')
    }));

    res.status(200).json({
      success: true,
      count: formattedReservations.length,
      data: formattedReservations
    });
  } catch (error) {
    console.error("Error fetching reservations:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error",
      error: error.message 
    });
  }
};


const getReservationsByEventType = async (req, res) => {
  try {
    const { eventType } = req.params;
    const reservations = await Reservation.find({ eventType });
    
    if (!reservations || reservations.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: `No reservations found for ${eventType} events` 
      });
    }

    const formattedReservations = reservations.map(reservation => ({
      ...reservation._doc,
      date: format(reservation.date, 'yyyy-MM-dd'),
      createdAt: format(reservation.createdAt, 'yyyy-MM-dd HH:mm'),
      updatedAt: format(reservation.updatedAt, 'yyyy-MM-dd HH:mm')
    }));

    res.status(200).json({
      success: true,
      count: formattedReservations.length,
      data: formattedReservations
    });
  } catch (error) {
    console.error("Error fetching event reservations:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error",
      error: error.message 
    });
  }
};

// updateReservation 
const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (updatedData.date) {
      updatedData.date = new Date(updatedData.date);
    }

    const reservation = await Reservation.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true
    });

    if (!reservation) {
      return res.status(404).json({ 
        success: false,
        message: "Reservation not found" 
      });
    }

    const formattedReservation = {
      ...reservation._doc,
      date: format(reservation.date, 'yyyy-MM-dd'),
      createdAt: format(reservation.createdAt, 'yyyy-MM-dd HH:mm'),
      updatedAt: format(reservation.updatedAt, 'yyyy-MM-dd HH:mm')
    };

    res.status(200).json({
      success: true,
      data: formattedReservation,
      message: "Reservation updated successfully"
    });
  } catch (error) {
    console.error("Error updating reservation:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error",
      error: error.message 
    });
  }
};

// deleteReservation 
const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findByIdAndDelete(id);

    if (!reservation) {
      return res.status(404).json({ 
        success: false,
        message: "Reservation not found" 
      });
    }

    res.status(200).json({
      success: true,
      message: "Reservation deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting reservation:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error",
      error: error.message 
    });
  }
};

const updateReservationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value',
      });
    }

    const updatedReservation = await Reservation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedReservation) {
      return res.status(404).json({
        success: false,
        message: 'Reservation not found',
      });
    }

    // Send status update email
    await sendBookingEmail(updatedReservation.email, updatedReservation._doc, status);

    res.status(200).json({
      success: true,
      data: updatedReservation,
      message: `Reservation ${status} successfully`
    });
  } catch (error) {
    console.error("Error updating reservation:", error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};

const getReservationsByUserEmail = async (req, res) => {
  try {
    const { email } = req.params;
    
    const reservations = await Reservation.find({ email });
    
    if (!reservations || reservations.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: `No reservations found for user with email: ${email}` 
      });
    }

    const formattedReservations = reservations.map(reservation => ({
      ...reservation._doc,
      date: format(reservation.date, 'yyyy-MM-dd'),
      createdAt: format(reservation.createdAt, 'yyyy-MM-dd HH:mm'),
      updatedAt: format(reservation.updatedAt, 'yyyy-MM-dd HH:mm')
    }));

    res.status(200).json({
      success: true,
      count: formattedReservations.length,
      data: formattedReservations
    });
  } catch (error) {
    console.error("Error fetching user reservations:", error);
    res.status(500).json({ 
      success: false,
      message: "Server error",
      error: error.message 
    });
  }
};

export {
  createReservation, 
  getAllReservations, 
  getReservationsByEventType, // Changed from getReservationsByVenue
  updateReservation, 
  deleteReservation,
  updateReservationStatus,
  getReservationsByUserEmail
};