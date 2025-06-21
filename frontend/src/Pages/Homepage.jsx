import React, {useContext, useEffect, useState} from 'react'
import './Homepage.css'
import Carousel from '../Components/Carousel/Carousel'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'  
import { FaStar } from 'react-icons/fa';
import userAvatar from '../assets/user-3296.png';

export default function Homepage() {
   const { isAdmin } = useContext(AuthContext);
   const [reviews, setReviews] = useState([]); 

    // Fetch reviews on component mount:
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const result = await response.json();

        if (result.success) {
          setReviews(result.data);
        } else {
          console.error('Failed to fetch reviews:', result.message);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  // Helper function to render stars nicely:
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        color={index < rating ? '#ffc107' : '#adadad'}
        size={20}
        style={{ marginRight: 2 }}
      />
    ));
  };


  return (
    <div className='hpc'>
      <Carousel/>
      <br />
      <section className="events-section">
        <div className="section-header">
            <h2>Events Types</h2>
            <Link to="/venues"><p className="view-more-btn">View More &raquo;</p></Link>
        </div>
        
        <div className="events-grid">
            <div className="hpevent-card">
                <img src="images/venues/wedding7.jpg" alt="Wedding venue with elegant arched windows" className="hpevent-image"/>
                <div className="hpevent-content">
                    <h3>Planning a Wedding</h3>
                    <p>Finding the right wedding venue sets the tone for your entire celebration. Whether you dream of a romantic garden ceremony, a grand ballroom reception, or a rustic barn wedding, the perfect venue offers both beauty and functionality. From luxurious estates with sweeping views to intimate vineyards and chic urban lofts, the ideal space reflects your style and accommodates your guests in comfort.</p>
                </div>
            </div>
            
            <div className="hpevent-card">
                <img src="images/venues/birthday7.jpg" alt="Birthday cake with sparklers" className="hpevent-image"/>
                <div className="hpevent-content">
                    <h3>Special Birthday</h3>
                    <p>Whether you're planning an intimate gathering or a grand party, the right birthday venue brings your vision to life. From trendy rooftop lounges with skyline views to cozy private dining rooms, playful arcade bars, or elegant banquet halls, the ideal space sets the mood for your special day.</p>
                </div>
            </div>
            
            <div className="hpevent-card">
                <img src="images/venues/conference6.jpg" alt="Conference audience in a venue" className="hpevent-image"/>
                <div className="hpevent-content">
                    <h3>Hold a Conference</h3>
                    <p>The right conference venue can elevate your event from ordinary to extraordinary. Whether you're hosting an international summit, corporate training, or industry expo, premier venues offer state-of-the-art technology, flexible seating arrangements, and professional support services.</p>
                </div>
            </div>
        </div>
    </section>
      <br />
      <section className="venue-section">
        <div className="venue-content">
            <h2>Work with us</h2>
            <div className="venue-features">
              <h4 className="venue-intro">Apply as a Venue/Service!</h4>
              <p> Make it easier for people to book your venue/service through our website.</p>
                <div className="feature">
                    <h4>For easy booking</h4>
                    <p>As this is an event managing website, make it effortless for the planners to find your fabulous venue/service using some related categories and pricing.</p>
                </div>
                
            </div>
            
            <Link to="/application"><button className="btn-secondary">Apply Now</button></Link>
        </div>
        <div className="venue-image">
            <img src="images/venues/birthday2.jpg" alt="Catering service with food items"/>
        </div>
    </section>
      <br />
      <h2>Manage Your Bookings</h2>
        <section className="manage-event">
          <div className="side1">
          <img src="images/venues/concert3.jpg" alt="" />
          <h4>Tickets Managing</h4>
          <h5>Manage your tickets and bookings with ease, Whether for cancellation or checking ticket status.</h5>
          </div>
          <div className="side2">
          <img src="images/venues/conference6.jpg" alt="" />
          <h4>Up-to-date Venue Booking Status</h4>
          <h5>Check your venue booking status and manage your bookings with ease. </h5>
          </div>
        </section>
        
      <br />
       {/* Customer Reviews */}

        <h2> What Our Customers Say </h2>
            <div className='review-section'>  
              <div className="marquee">
              <div className="track">
              {reviews.length > 0 ? (
              [...reviews, ...reviews].map((review, index) => (
                <div key={index} className="review-card">
                  <img src={userAvatar} alt="avatar" className="avatar" />
                  <div className="text">
                    <h4>{review.user}</h4>
                    <div>{renderStars(review.rating)}</div> {/* Render stars nicely */}
                    <p>Venue: {review.event}</p>
                    <p>{review.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p> // fallback if no reviews
            )}
          </div>
        </div>
      </div>

      {/* Give Review Button */}
      <div>
        <Link to="/review">
          <button className="rev-btn">Give A Review</button>
        </Link>
            </div>
          <br />
             {isAdmin && (
              <Link to="/dashboard">
                <button className="dash-btn">Go to Dashboard</button>
              </Link>
            )}
      </div>
  )
}
