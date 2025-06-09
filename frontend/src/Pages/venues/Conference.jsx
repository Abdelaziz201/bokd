// import React from "react";
// import { Link } from "react-router-dom";
// import "./Explore More.css";

// const ConferenceVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Conference Venues</h1>

//       <div className="explore-card">
//         <img src="/images/venues/conference1.jpg" alt="Conference 1" />
//         <div className="explore-info">
//           <h2>Executive Hall</h2>
//           <p>
//             A premium venue equipped with state-of-the-art presentation tools, seating for 200 guests,
//             and ideal for corporate summits.
//           </p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Conference", eventVenue: "Executive Hall" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/conference2.jpg" alt="Conference 2" />
//         <div className="explore-info">
//           <h2>Modern Theater</h2>
//           <p>
//             Spacious and tech-ready venue for seminars and product launches with customizable layouts.
//           </p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Conference", eventVenue: "Modern Theater" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/conference3.jpg" alt="Conference 3" />
//         <div className="explore-info">
//           <h2>Boardroom Elite</h2>
//           <p>
//             Intimate setting with a luxury atmosphere perfect for strategy meetings and exclusive panels.
//           </p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Conference", eventVenue: "Boardroom Elite" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/conference4.jpg" alt="Conference 4" />
//         <div className="explore-info">
//           <h2>Innovation Space</h2>
//           <p>
//             A creative conference zone designed for collaborative events and interactive sessions.
//           </p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Conference", eventVenue: "Innovation Space" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConferenceVenues;





import React from "react";
import { Link } from "react-router-dom";
import "./Explore More.css";

const ConferenceVenues = () => {
  return (
    <div className="explore-container">
      <h1>Conference Venues</h1>

      <div className="explore-card">
        <img src="/images/venues/conference1.jpg" alt="Conference 1" />
        <div className="explore-info">
          <h2>Executive Hall</h2>
          <p>
            A premium venue equipped with state-of-the-art presentation tools, seating for 200 guests,
            and ideal for corporate summits.
          </p>
          <p>📍: Altındağ</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Conference", eventVenue: "Executive Hall" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/conference2.jpg" alt="Conference 2" />
        <div className="explore-info">
          <h2>Modern Theater</h2>
          <p>
            Spacious and tech-ready venue for seminars and product launches with customizable layouts.
          </p>
          <p>📍: Çankaya</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Conference", eventVenue: "Modern Theater" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/conference3.jpg" alt="Conference 3" />
        <div className="explore-info">
          <h2>Boardroom Elite</h2>
          <p>
            Intimate setting with a luxury atmosphere perfect for strategy meetings and exclusive panels.
          </p>
          <p>📍: Yenimahalle</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Conference", eventVenue: "Boardroom Elite" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/conference4.jpg" alt="Conference 4" />
        <div className="explore-info">
          <h2>Innovation Space</h2>
          <p>
            A creative conference zone designed for collaborative events and interactive sessions.
          </p>
          <p>📍: Çayyolu</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Conference", eventVenue: "Innovation Space" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConferenceVenues;
