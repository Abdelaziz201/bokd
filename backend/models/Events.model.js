import mongoose from "mongoose";

const eventSchema =  mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true            // removes extra spaces
  },
  description: {
    type: String,
    required: true,   // field must be provided
  
  },
  date: {
    type: Date,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    enum: [
      'Weddings', 'Concerts', 'Graduation Parties', 'Birthday Parties',
      'Retirement','Work Meetings','Workshops','Private Parties',
      'Seminars'
    ], 
    required: true,
  },
  price: {
    type: Number,
    default: 0            // if not given, use 0
  },
  status: {
    type: String,
    enum: ['Published', 'Draft'],
    default: 'Draft', // if not given, use 'Draft'
  },

},{
    timestamps: true,   // adds createdAt and updatedAt fields
    
}); 

const Event = mongoose.model("Event", eventSchema);
export default Event;