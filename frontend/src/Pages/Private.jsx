import React from "react";
import "./Explore More.css";

const PrivateVenues = () => {
  return (
    <div className="explore-container">
      <h1>Private Parties</h1>

      <div className="explore-card">
        <img src="/images/venues/private1.jpg" alt="Private 1" />
        <div className="explore-info">
          <h2>Venue 1</h2>
          <p>Description</p>
          <a href="/book-venue" className="book-btn">Book a Venue</a>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/private2.jpg" alt="Private 2" />
        <div className="explore-info">
          <h2>Venue 2</h2>
          <p>Description</p>
          <a href="/book-venue" className="book-btn">Book a Venue</a>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/private3.jpg" alt="Private 3" />
        <div className="explore-info">
          <h2>Venue 3</h2>
          <p>Description</p>
          <a href="/book-venue" className="book-btn">Book a Venue</a>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/private4.jpg" alt="Private 4" />
        <div className="explore-info">
          <h2>Venue 4</h2>
          <p>Description</p>
          <a href="/book-venue" className="book-btn">Book a Venue</a>
        </div>
      </div>
    </div>
  );
};

export default PrivateVenues;
