// import React from "react";
// import { Link } from "react-router-dom";
// import "./Explore More.css";

// const ConcertVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Concert Venues</h1>

//       <div className="explore-card">
//         <img src="/images/venues/concert1.avif" alt="Concert 1" />
//         <div className="explore-info">
//           <h2>Venue 1</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Concert", eventVenue: "Venue 1" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/concert2.avif" alt="Concert 2" />
//         <div className="explore-info">
//           <h2>Venue 2</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Concert", eventVenue: "Venue 2" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/concert3.avif" alt="Concert 3" />
//         <div className="explore-info">
//           <h2>Venue 3</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Concert", eventVenue: "Venue 3" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/concert5.avif" alt="Concert 4" />
//         <div className="explore-info">
//           <h2>Venue 4</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Concert", eventVenue: "Venue 4" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConcertVenues;




import React from "react";
import { Link } from "react-router-dom";
import "./Explore More.css";

const ConcertVenues = () => {
  return (
    <div className="explore-container">
      <h1>Concert Venues</h1>

      <div className="explore-card">
        <img src="/images/venues/concert1.jpg" alt="Concert 1" />
        <div className="explore-info">
          <h2>The Phoenix Grand</h2>
          <p>Best for live performances and music events</p>
          <p>📍: Ankara Arena</p>

          <Link
            to="/book-venue"
            state={{ eventType: "Concert", eventVenue: "The Phoenix Grand" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/concert2.jpg" alt="Concert 2" />
        <div className="explore-info">
          <h2>The Haunt</h2>
          <p>Modern sound and lighting systems</p>
          <p>📍: Incek</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Concert", eventVenue: "The Haunt" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/concert3.jpg" alt="Concert 3" />
        <div className="explore-info">
          <h2>Echo & Ivy</h2>
          <p>Spacious halls with excellent acoustics</p>
          <p>📍: Çankaya</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Concert", eventVenue: "Echo & Ivy" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/concert5.jpg" alt="Concert 4" />
        <div className="explore-info">
          <h2>The Riff Den</h2>
          <p>Ideal for concerts and shows</p>
          <p>📍: Kocatepe</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Concert", eventVenue: "The Riff Den" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConcertVenues;
