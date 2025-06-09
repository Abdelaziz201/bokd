// import React from "react";
// import { Link } from "react-router-dom"; // ✅ Add this import
// import "./Explore More.css";

// const BirthdayVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Birthday Venues</h1>

//       <div className="explore-card">
//         <img src="/images/venues/birthday1.jpg" alt="Birthday 1" />
//         <div className="explore-info">
//           <h2>Birthday Venue 1</h2>
//           <p>Colorful and fun venue for kids' birthday parties.</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Birthday", eventVenue: "Venue 1" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/birthday2.jpg" alt="Birthday 2" />
//         <div className="explore-info">
//           <h2>Birthday Venue 2</h2>
//           <p>Modern loft ideal for teen and adult parties.</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Birthday", eventVenue: "Venue 2" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/birthday3.jpg" alt="Birthday 3" />
//         <div className="explore-info">
//           <h2>Birthday Venue 3</h2>
//           <p>Spacious hall with customizable themes.</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Birthday", eventVenue: "Venue 3" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/birthday4.jpg" alt="Birthday 4" />
//         <div className="explore-info">
//           <h2>Birthday Venue 4</h2>
//           <p>Outdoor garden party setup with balloon decor.</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Birthday", eventVenue: "Venue 4" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BirthdayVenues;







import React from "react";
import { Link } from "react-router-dom"; // ✅ Add this import
import "./Explore More.css";

const BirthdayVenues = () => {
  return (
    <div className="explore-container">
      <h1>Birthday Venues</h1>

      <div className="explore-card">
        <img src="/images/venues/birthday5.jpg" alt="Birthday 1" />
        <div className="explore-info">
          <h2>Opulence Ballroom</h2>
          <p>Colorful and fun venue for kids' birthday parties.</p>
          <p>📍: Maltepe</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Birthday", eventVenue: "Opulence Ballroom" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/birthday2.jpg" alt="Birthday 2" />
        <div className="explore-info">
          <h2>Starlit Camp & Cabana</h2>
          <p>Modern loft ideal for teen and adult parties.</p>
          <p>📍: Incek</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Birthday", eventVenue: "Starlit Camp & Cabana" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/birthday3.jpg" alt="Birthday 3" />
        <div className="explore-info">
          <h2>The Firefly Pavilion</h2>
          <p>Spacious hall with customizable themes.</p>
          <p>📍: Çankaya</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Birthday", eventVenue: "The Firefly Pavilion" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/birthday4.jpg" alt="Birthday 4" />
        <div className="explore-info">
          <h2>The Golden Hour Lounge</h2>
          <p>Outdoor garden party setup with balloon decor.</p>
          <p>📍: Gölbaşı</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Birthday", eventVenue: "The Golden Hour Lounge" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BirthdayVenues;
