import mongoose from "mongoose";

const venueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, // removes extra spaces
    },
    description: {
        type: String,
        required: true, // field must be provided
    },
    capacity: {
        type: Number,
        required: false,
    },
    tags:{
        type: [String], // allows multiple enums to be chosen
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
    location: {
        type: String,
        required: false,
    },
    type: {
    type: String,
    enum: ['venue', 'service'],
    required: true,
  },
  photo: {
    type: String,
    required: false, 
  },
    
},{
    timestamps: true,   // adds createdAt and updatedAt fields
    
});
const Venue = mongoose.model("Venue", venueSchema);
export default Venue;