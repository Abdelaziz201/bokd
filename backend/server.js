import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import mongoose from 'mongoose';
import Event from './models/Events.model.js';
import Venue from './models/venueandservice.model.js';
import venuereservationRoutes from './routes/venuereservation.route.js';
import Ticket from './models/tickets.model.js';
import Review from './models/Reviews.model.js';
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/user.route.js';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import multer from 'multer';
import fs from 'fs';
import bodyParser from 'body-parser';
import paymentRoutes from './routes/payment.js';
import ticketRoutes from './routes/tickets.js';
import chalk from 'chalk';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
};
app.use(cors(corsOptions));




const ppp = path.resolve();




app.use('/api/reservation', venuereservationRoutes); // Use the reservation routes
app.use("/api/users", userRoutes); 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ✅ Static serving of uploaded files
 app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});






// Create a new event
app.post("/api/Event/book", async (req, res) => { 
  const event = req.body;

    if (!Event) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newEvent = new Event(event); // Create a new event instance
    // if (!newEvent) {
    //   return res.status(400).json({ message: 'Invalid event data' });
    // }
  try {
    
    await newEvent.save();
    res.status(201).json({success: true, data: newEvent});
  } catch (error) {
    res.status(500).json({ message: error.message });
   
  }
});


// Get/read all events
app.get("/api/Event", async (req, res) => { 
  try {
    const events = await Event.find();
    res.status(200).json({success: true, data: events});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Get/read a single event by ID and update it
app.put("/api/Event/:id", async (req, res) => {
  const {id} = req.params;
  const event = req.body;
  if(!mongoose.Types.ObjectId.isValid(id)) { //check if the id is a valid ObjectId
    return res.status(404).json({message: "Please provide a valid id"}); //if not, return a 400 error
  }
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id,event,{new:true}); //find the product by id and update it
    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({success: true, data: updatedEvent}); //return the updated product with a 200 status code
    } catch (error) {
     res.status(500).json({success: false, message: "Internal server error"}); //return a 500 error
     console.error("Error in updating the product:", error.message); //log the error to the console
    }
 
});

// READ one event by ID
app.get('/api/events/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE an event by ID   
app.delete('/api/events/delete/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ success: true, message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});






// venue and services


//Venue


// Create a new venue  
app.post("/api/Venue", upload.single('photo'), async (req, res) => {
  try {
    // Verify required fields
    if (!req.body.name || !req.body.description || !req.body.email || !req.body.phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Handle file path
    let photoPath = null;
      if (req.file) {
      photoPath = `/uploads/${req.file.filename}`;  // ✅ consistent with service route
    }

    const newVenue = new Venue({
      name: req.body.name,
      description: req.body.description,
      email: req.body.email,
      phone: req.body.phone,
      location: req.body.location,
      type: req.body.type || 'venue',
      capacity: req.body.capacity ? parseInt(req.body.capacity, 10) : undefined,
      tags: JSON.parse(req.body.tags || '[]'),
      photo: photoPath
    });

    await newVenue.save();
    
    res.status(201).json({
      success: true,
      data: newVenue,
      message: 'Venue created successfully'
    });

  } catch (error) {
    console.error('Error creating venue:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});


// read all venues 
app.get("/api/Venue/read", async (req, res) => { 
  try {
    const venues = await Venue.find({ type: 'venue' });
    res.status(200).json({success: true, data: venues});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});  


// Delete a venue by ID   
app.delete('/api/Venue/delete/:id', async (req, res) => { 
 try {
    const venue = await Venue.findByIdAndDelete(req.params.id);

    if (!venue) {
      return res.status(404).json({ success: false, message: "Venue not found" });
    }

    res.status(200).json({ success: true, message: "Venue deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



//service


// Create a new service 
app.post('/api/service', upload.single('photo'), async (req, res) => { 
  try {
    

    const { name, description, email, phone, capacity } = req.body;
    const tags = JSON.parse(req.body.tags || '[]');
    
    // Use the same path handling as venue
    const photoPath = req.file ? `/uploads/${req.file.filename}` : null;

    const newService = new Venue({
      name,
      description,
      email,
      phone,
      type: 'service', // Explicitly set type to 'service'
      capacity: capacity ? parseInt(capacity, 10) : undefined,
      tags,
      photo: photoPath,
      // Location is not required for services
      location: undefined
    });

    await newService.save();
    
    res.status(201).json({
      success: true,
      data: newService, 
      message: 'Service created successfully'
    });

  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get/read all services 
app.get("/api/service/read", async (req, res) => { 
  try {
    const services = await Venue.find({ type: 'service' });
    res.status(200).json({success: true, data: services});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Delete a service by ID 
app.delete('/api/service/delete/:id', async (req, res) => { 
 
  try {
    const service = await Venue.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: "Service not found" });
    }

    res.status(200).json({ success: true, message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});



//search bar


// Search  by name, location, or tags in events  
app.get('/api/search/:key', async (req, res) => { 
  console.log(req.params.key);
  let data = await Event.find({
    "$or": [
      { name: { $regex: req.params.key } },
      { location: { $regex: req.params.key } },
      { categories: { $regex: req.params.key } }
    ]
  })
  res.send(data);
  if (!data) {
    return res.status(404).json({ message: "Event not found" });
  } 
});
 






//contact us
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `📩 New Contact Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});





//Report a problem
app.post('/api/report', async (req, res) => {
  const { email, issue } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: '🛠 Bug Report from BOKD User',
    text: `
      Report from: ${email}
      Issue:
      ${issue}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Report sent' });
  } catch (error) {
    console.error('Report email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send report' });
  }
});




// Report a Venue
app.post('/api/report-venue', async (req, res) => {
  const { email, name, issue } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `📍 Venue Report: ${name}`,
    text: `
      Venue Reported: ${name}
      User Email: ${email}

Issue:
${issue}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Venue report sent' });
  } catch (error) {
    console.error('Venue report error:', error);
    res.status(500).json({ success: false, message: 'Failed to send venue report' });
  }
});









//Reviews

// Create a new review
app.post('/api/reviews', async (req, res) => {
  const reviewData = req.body;

  if (!reviewData || !reviewData.user || !reviewData.event || !reviewData.rating || !reviewData.comment) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const newReview = new Review(reviewData);

  try {
    await newReview.save();
    res.status(201).json({ success: true, data: newReview });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Get all reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});






//nejan  payment


// Rotaları yükle
app.use("/api/payment", paymentRoutes);
app.use("/api/tickets", ticketRoutes);

// Regexler
const cardNumberRegex =
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|2[2-7][0-9]{14})$/; // Visa, MasterCard
const expirationDateRegex = /^(0[1-9]|1[0-2])([0-9]{2})$/; // MMYY format
const cvcRegex = /^[0-9]{3,4}$/; // 3 veya 4 haneli

app.get("/ticket-zones", (req, res) => {
  const ticketZones = [
    {
      id: 1,
      zone: "Ön",
      description: "Sahneye en yakın alan, sınırlı sayıda bilet.",
      price: 1000
    },
    {
      id: 2,
      zone: "Orta",
      description: "İyi görüş açısı, dengeli konum.",
      price: 700
    },
    {
      id: 3,
      zone: "Arka",
      description: "Genel giriş alanı, ekonomik seçenek.",
      price: 400
    }
  ];

  res.json({
    success: true,
    data: ticketZones
  });
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
app.post("/book-ticket", (req, res) => {
  const { fullName, email, zoneId } = req.body;

  // Validasyon
  if (!fullName || fullName.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: "Ad soyad en az 3 karakter olmalıdır."
    });
  }

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Geçerli bir e-posta adresi giriniz."
    });
  }

  const validZoneIds = [1, 2, 3];
  if (!zoneId || !validZoneIds.includes(zoneId)) {
    return res.status(400).json({
      success: false,
      message: "Geçerli bir bilet bölgesi seçiniz (1=Ön, 2=Orta, 3=Arka)."
    });
  }

  // (Gerçek sistemde burada rezervasyon veritabanına kaydedilir.)

  return res.json({
    success: true,
    message: "Bilet başarıyla rezerve edildi.",
    data: { fullName, email, zoneId }
  });
});



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(ppp, 'frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(ppp, "frontend", "dist", "index.html"));
  });
}


app.listen(PORT, () => {
    connectDB();
    console.log('MongoDB Connected');
  console.log('Server started at http://localhost:' + PORT);
});


