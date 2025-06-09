import express from 'express';
import { validatePaymentFields } from '../validators/paymentValidators.js';
import Ticket from '../models/tickets.model.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send ticket confirmation email
const sendTicketConfirmationEmail = async (bookingData, paymentData) => {
  const { fullName, email, zone } = bookingData;
  
  // Get zone details
  const zoneDetails = {
    "1": { name: "Front Zone", price: 1000 },
    "2": { name: "Middle Zone", price: 700 },
    "3": { name: "Back Zone", price: 400 }
  };
  
  const selectedZone = zoneDetails[zone];
  const bookingReference = Date.now().toString(36).toUpperCase();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: '🎟 Your Ticket Confirmation - BOKD',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank you for your purchase!</h2>
        <p>Dear ${fullName},</p>
        <p>Your ticket has been successfully booked and paid for. Here are your booking details:</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #444;">Booking Details</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Zone:</strong> ${selectedZone.name}</p>
          <p><strong>Price:</strong> ${selectedZone.price} TL</p>
          <p><strong>Booking Reference:</strong> ${bookingReference}</p>
          <p><strong>Payment Method:</strong> Card ending in ${paymentData.cardNumber}</p>
          <p><strong>Booking Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>

        <p>Please keep this email as proof of your booking. You can present this at the venue entrance.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">If you have any questions, please don't hesitate to contact us.</p>
          <p style="color: #666; font-size: 14px;">Best regards,<br>The BOKD Team</p>
        </div>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log('Ticket confirmation email sent successfully to:', email);
    return true;
  } catch (error) {
    console.error('Error sending ticket confirmation email:', error);
    return false;
  }
};

router.post("/", async (req, res) => {
  const { nameSurname, cardNumber, expirationDate, cvc, bookingData } = req.body;
  const validationError = validatePaymentFields({ nameSurname, cardNumber, expirationDate, cvc });

  if (validationError) {
    return res.status(400).json({ success: false, message: validationError });
  }

  try {
    // Find the ticket by ID
    const ticket = await Ticket.findById(bookingData.ticketId);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found"
      });
    }

    // Simulate payment success and update ticket status
    ticket.status = 'confirmed';
    await ticket.save();

    // Send confirmation email
    const emailSent = await sendTicketConfirmationEmail(ticket, {
      nameSurname,
      cardNumber: cardNumber.slice(-4), // Only send last 4 digits for security
      expirationDate
    });

    if (!emailSent) {
      console.warn('Payment successful but email could not be sent');
    }

    return res.json({
      success: true,
      message: "Ödeme başarıyla tamamlandı ve bilet e-postanıza gönderildi."
    });
  } catch (error) {
    console.error('Payment processing error:', error);
    return res.status(500).json({
      success: false,
      message: "Ödeme işlemi sırasında bir hata oluştu."
    });
  }
});

export default router;
