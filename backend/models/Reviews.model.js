import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    event: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1, // minimum rating value
        max: 5, // maximum rating value
    },
    comment: {
        type: String,
        required: true,
    },
},{
    timestamps: true, // adds createdAt and updatedAt fields
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;