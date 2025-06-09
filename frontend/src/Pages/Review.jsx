import React, { useState } from 'react';
import './Review.css';
import StarRate from '../Components/starRate';

export default function Review() {
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
        user: e.target.name.value,
        event: e.target.event.value,
        rating: rating, // this is the selected star rating
        comment: e.target.review.value,
    };

    try {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Review submitted:', result);

            // Optionally, reset form fields after success:
            e.target.reset();
            setRating(0);
            alert('Review submitted successfully!');
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message}`);
        }
    } catch (error) {
        console.error('Error submitting review:', error);
        alert('An error occurred. Please try again.');
    }
};





  return (
    <div className='review-container'>
      <h2 className='review-h2'>Give A Review!</h2>

      <form className='review-form' onSubmit={handleSubmit}>
        <div className="rev-form-group">
          <label htmlFor="name">Name:</label>
          <input placeholder="Enter Your Username" type="text" id="name" name="name" className="form-control" required />
        </div>

        <div className="rev-form-group">
          <label htmlFor="name">Venue/Ticket:</label>
          <input placeholder="Enter Venue Name or Ticket name to Rate" type="text" id="event" name="event" className="form-control" required />
        </div>

        <div className="rev-form-group">
          <label htmlFor="rating">Rating:</label>
          <div className="star-rating">
            <StarRate rating={rating} setRating={setRating}/>
          </div>
        </div>

        <div className="rev-form-group">
          <label htmlFor="review">Review:</label>
          <textarea placeholder="Describe your experience..." id="review" name="review" className="form-control" rows="6" required></textarea>
        </div>

        <button type="submit" className="review-btn">Submit Review</button>

      </form>
    </div>
  )
}
