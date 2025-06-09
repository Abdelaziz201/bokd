// import React from "react";
// import { Link } from "react-router-dom";
// import "./Explore More.css";

// const WeddingVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Wedding Venues</h1>

//       <div className="explore-card">
//         <img src="/images/venues/wedding1.jpg" alt="Wedding 1" />
//         <div className="explore-info">
//           <h2>Wedding Venue 1</h2>
//           <p>Romantic venue with floral decorations and ocean views.</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Wedding", eventVenue: "Wedding Venue 1" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/wedding2.jpg" alt="Wedding 2" />
//         <div className="explore-info">
//           <h2>Wedding Venue 2</h2>
//           <p>Elegant ballroom perfect for grand celebrations.</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Wedding", eventVenue: "Wedding Venue 2" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/wedding3.jpg" alt="Wedding 3" />
//         <div className="explore-info">
//           <h2>Wedding Venue 3</h2>
//           <p>Charming outdoor garden with string lights.</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Wedding", eventVenue: "Wedding Venue 3" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/wedding4.jpg" alt="Wedding 4" />
//         <div className="explore-info">
//           <h2>Wedding Venue 4</h2>
//           <p>Luxury setting with crystal chandeliers.</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Wedding", eventVenue: "Wedding Venue 4" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeddingVenues;






import React from "react";
import { Link } from "react-router-dom";
import "./Explore More.css";

const WeddingVenues = () => {
  return (
    <div className="explore-container">
      <h1>Wedding Venues</h1>

      <div className="explore-card">
        <img src="/images/venues/wedding1.jpg" alt="Wedding 1" />
        <div className="explore-info">
          <h2>The Grand Celestia</h2>
          <p>Romantic venue with floral decorations and ocean views.</p>
          <p>📍: Incek</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Wedding", eventVenue: "The Grand Celestia" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/wedding2.jpg" alt="Wedding 2" />
        <div className="explore-info">
          <h2>The Enchanted Glade</h2>
          <p>Elegant ballroom perfect for grand celebrations.</p>
          <p>📍: Çankaya</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Wedding", eventVenue: "The Enchanted Glade" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/wedding3.jpg" alt="Wedding 3" />
        <div className="explore-info">
          <h2>Starlight Gardens</h2>
          <p>Charming outdoor garden with string lights.</p>
          <p>📍: Gölbaşı</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Wedding", eventVenue: "Starlight Gardens" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/wedding4.jpg" alt="Wedding 4" />
        <div className="explore-info">
          <h2>The Velvet Château</h2>
          <p>Luxury setting with crystal chandeliers.</p>
          <p>📍: Çayyolu</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Wedding", eventVenue: "The Velvet Château" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeddingVenues;
