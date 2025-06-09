// import React from "react";
// import { Link } from "react-router-dom";
// import "./Explore More.css";

// const SeminarsVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Seminars</h1>

//       <div className="explore-card">
//         <img src="/images/venues/Seminars1.avif" alt="Seminar 1" />
//         <div className="explore-info">
//           <h2>Venue 1</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Seminar", eventVenue: "Venue 1" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Seminars2.avif" alt="Seminar 2" />
//         <div className="explore-info">
//           <h2>Venue 2</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Seminar", eventVenue: "Venue 2" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Seminars3.avif" alt="Seminar 3" />
//         <div className="explore-info">
//           <h2>Venue 3</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Seminar", eventVenue: "Venue 3" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Seminars4.avif" alt="Seminar 4" />
//         <div className="explore-info">
//           <h2>Venue 4</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Seminar", eventVenue: "Venue 4" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeminarsVenues;






import React from "react";
import { Link } from "react-router-dom";
import "./Explore More.css";

const SeminarsVenues = () => {
  return (
    <div className="explore-container">
      <h1>Seminars</h1>

      <div className="explore-card">
        <img src="/images/venues/Seminars1.jpg" alt="Seminar 1" />
        <div className="explore-info">
          <h2>Thesis Theater</h2>
          <p>Spacious halls with modern amenities, circular debating chamber with 360-degree projection mapping.</p>
          <p>📍: Çankaya</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Seminar", eventVenue: "Thesis Theater" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Seminars2.jpg" alt="Seminar 2" />
        <div className="explore-info">
          <h2>Data Grove Hall</h2>
          <p>Ideal for seminars and training sessions</p>
          <p>📍: Keçiören</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Seminar", eventVenue: "Data Grove Hall" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Seminars3.jpg" alt="Seminar 3" />
        <div className="explore-info">
          <h2>Quantum Lecture Hall</h2>
          <p>Theater-style seating with a 180-degree curved LED stage wall. Training materials and equipment provided.</p>
          <p>📍: Yenimahalle</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Seminar", eventVenue: "Quantum Lecture Hall" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Seminars4.jpg" alt="Seminar 4" />
        <div className="explore-info">
          <h2>Scholarly Commons</h2>
          <p>Flexible seating arrangements</p>
          <p>📍: Mamak</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Seminar", eventVenue: "Scholarly Commons" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeminarsVenues;
