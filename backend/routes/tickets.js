import express from 'express';
import { validateBookingFields } from '../validators/ticketValidators.js';
import Ticket from '../models/tickets.model.js';

const router = express.Router();

const ticketZones = [
  { id: 1, zone: "1", description: "Sahneye en yakın alan, sınırlı sayıda bilet.", price: 1000 },
  { id: 2, zone: "2", description: "İyi görüş açısı, dengeli konum.", price: 700 },
  { id: 3, zone: "3", description: "Genel giriş alanı, ekonomik seçenek.", price: 400 }
];

router.get("/zones", (req, res) => {
  res.json({ success: true, data: ticketZones });
});

router.post("/book", async (req, res) => {
  try {
    const { fullName, email, phone, zoneId } = req.body;
    const validationError = validateBookingFields({ fullName, email, zoneId });

    if (validationError) {
      return res.status(400).json({ success: false, message: validationError });
    }

    // Get zone details
    const selectedZone = ticketZones.find(zone => zone.id === Number(zoneId));
    if (!selectedZone) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid zone selected" 
      });
    }

    // Create new ticket
    const newTicket = new Ticket({
      fullName,
      email,
      phone,
      zone: selectedZone.zone,
      price: selectedZone.price,
      status: 'pending',
      bookingDate: new Date()
    });

    // Save to database
    await newTicket.save();

    return res.status(201).json({
      success: true,
      message: "Ticket booked successfully",
      data: {
        ticketId: newTicket._id,
        fullName,
        email,
        zone: selectedZone.zone,
        price: selectedZone.price
      }
    });
  } catch (error) {
    console.error('Error booking ticket:', error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to book ticket. Please try again."
    });
  }
});



router.get("/user/:email", async (req, res) => { //backend
  const { email } = req.params;

  try {
    const tickets = await Ticket.find({ email });
    
    return res.status(200).json({
      success: true,
      data: tickets
    });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch tickets."
    });
  }
});


export default router;
