// import React from "react";
// import { Link } from "react-router-dom"; // ✅ Added for navigation with state
// import axios from 'axios';
// import "./Explore More.css";

// const RetirementVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Retirement Party</h1>

//       <div className="explore-card">
//         <img src="/images/venues/retirement1.jpg" alt="Retirement 1" />
//         <div className="explore-info">
//           <h2>Venue 1</h2>
//           <p>Description</p>
//           {/* ✅ Updated to pass eventType */}
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Retirement Party", eventVenue: "Venue 1" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/retirement2.jpg" alt="Retirement 2" />
//         <div className="explore-info">
//           <h2>Venue 2</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Retirement Party", eventVenue: "Venue 2" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/retirement3.jpg" alt="Retirement 3" />
//         <div className="explore-info">
//           <h2>Venue 3</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Retirement Party", eventVenue: "Venue 3" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/retirement4.jpg" alt="Retirement 4" />
//         <div className="explore-info">
//           <h2>Venue 4</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Retirement Party", eventVenue: "Venue 4" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RetirementVenues;






import React from "react";
import { Link } from "react-router-dom"; // ✅ Added for navigation with state
import axios from 'axios';
import "./Explore More.css";

const RetirementVenues = () => {
  return (
    <div className="explore-container">
      <h1>Retirement Party</h1>

      <div className="explore-card">
        <img src="/images/venues/retirement1.jpg" alt="Retirement 1" />
        <div className="explore-info">
          <h2>Sunset Cove Gardens</h2>
          <p>Open air venue with scenic views</p>
          <p>📍: Incek</p>
          {/* ✅ Updated to pass eventType */}
          <Link
            to="/book-venue"
            state={{ eventType: "Retirement Party", eventVenue: "Sunset Cove Gardens" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/retirement2.jpg" alt="Retirement 2" />
        <div className="explore-info">
          <h2>Bookmark Lounge</h2>
          <p>Spacious halls for receptions</p>
          <p>📍: Çayyolu</p>

          <Link
            to="/book-venue"
            state={{ eventType: "Retirement Party", eventVenue: "Bookmark Lounge" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/retirement3.jpg" alt="Retirement 3" />
        <div className="explore-info">
          <h2>Timepiece Room</h2>
          <p>Ideal for retirement celebrations</p>
          <p>📍: Orencik</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Retirement Party", eventVenue: "Timepiece Room" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/retirement4.jpg" alt="Retirement 4" />
        <div className="explore-info">
          <h2>Palm & Pearl Beach House</h2>
          <p>On Beach Party Zone Ideal for retirement parties</p>
          <p>📍: Trabzon</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Retirement Party", eventVenue: "Palm & Pearl Beach House" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RetirementVenues;
