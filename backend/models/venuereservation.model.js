import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        required: true,
    },
    eventVenue:{
        type: String,
        required: true,
    },
    numberOfGuests: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    additionalNotes: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
}, { timestamps: true });

export default mongoose.model("Reservation", reservationSchema);