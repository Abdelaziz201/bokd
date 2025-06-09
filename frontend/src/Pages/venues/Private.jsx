// import React from "react";
// import { Link } from "react-router-dom";
// import "./Explore More.css";

// const PrivateVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Private Parties</h1>

//       <div className="explore-card">
//         <img src="/images/venues/Private1.avif" alt="Private 1" />
//         <div className="explore-info">
//           <h2>Venue 1</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Private Party", eventVenue: "Venue 1" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Private3.avif" alt="Private 2" />
//         <div className="explore-info">
//           <h2>Venue 2</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Private Party", eventVenue: "Venue 2" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Private3.avif" alt="Private 3" />
//         <div className="explore-info">
//           <h2>Venue 3</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Private Party", eventVenue: "Venue 3" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Private4.avif" alt="Private 4" />
//         <div className="explore-info">
//           <h2>Venue 4</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Private Party", eventVenue: "Venue 4" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivateVenues;




import React from "react";
import { Link } from "react-router-dom";
import "./Explore More.css";

const PrivateVenues = () => {
  return (
    <div className="explore-container">
      <h1>Private Parties</h1>

      <div className="explore-card">
        <img src="/images/venues/Private1.jpg" alt="Private 1" />
        <div className="explore-info">
          <h2>Pumpkin & Pine</h2>
          <p>Perfect for intimate gatherings and celebrations</p>
          <p>📍: Çankaya</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Private Party", eventVenue: "Pumpkin & Pine" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Private2.jpg" alt="Private 2" />
        <div className="explore-info">
          <h2>The Fairy Light</h2>
          <p>A private and exclusive setting suitable for parties</p>
          <p>📍: Orencik</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Private Party", eventVenue: "The Fairy Light" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Private3.jpg" alt="Private 3" />
        <div className="explore-info">
          <h2>Apothecary Lounge</h2>
          <p>Catering and decoration services available</p>
          <p>📍: Gölbaşı</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Private Party", eventVenue: "Apothecary Lounge" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Private4.jpg" alt="Private 4" />
        <div className="explore-info">
          <h2>Midnight Market</h2>
          <p>Personalized service for a memorable experience</p>
          <p>📍: Çayyolu</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Private Party", eventVenue: "Midnight Market" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivateVenues;