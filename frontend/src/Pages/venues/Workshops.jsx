// import React from "react";
// import { Link } from "react-router-dom";
// import "./Explore More.css";

// const WorkshopsVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Workshops</h1>

//       <div className="explore-card">
//         <img src="/images/venues/Workshops1.avif" alt="Workshop 1" />
//         <div className="explore-info">
//           <h2>Venue 1</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Workshop", eventVenue: "Venue 1" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Workshops2.avif" alt="Workshop 2" />
//         <div className="explore-info">
//           <h2>Venue 2</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Workshop", eventVenue: "Venue 2" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Workshops3.avif" alt="Workshop 3" />
//         <div className="explore-info">
//           <h2>Venue 3</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Workshop", eventVenue: "Venue 3" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Workshops4.avif" alt="Workshop 4" />
//         <div className="explore-info">
//           <h2>Venue 4</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Workshop", eventVenue: "Venue 4" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkshopsVenues;



import React from "react";
import { Link } from "react-router-dom";
import "./Explore More.css";

const WorkshopsVenues = () => {
  return (
    <div className="explore-container">
      <h1>Workshops</h1>

      <div className="explore-card">
        <img src="/images/venues/Workshops1.jpg" alt="Workshop 1" />
        <div className="explore-info">
          <h2>Maker’s Atrium</h2>
          <p>Spacious halls with modern amenities</p>
          <p>📍: Keçiören</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Workshop", eventVenue: "Maker’s Atrium" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Workshops2.jpg" alt="Workshop 2" />
        <div className="explore-info">
          <h2>Hive Workshop Co.</h2>
          <p>Ideal for workshops and training sessions</p>
          <p>📍: Çankaya</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Workshop", eventVenue: "Hive Workshop Co." }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Workshops3.jpg" alt="Workshop 3" />
        <div className="explore-info">
          <h2>Precision Labs</h2>
          <p>Materials and equipment provided</p>
          <p>📍: Yenimahalle</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Workshop", eventVenue: "Precision Labs" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Workshops4.jpg" alt="Workshop 4" />
        <div className="explore-info">
          <h2>Patchwork Commons</h2>
          <p>Carpentry and welding tools available</p>
          <p>📍: Mamak</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Workshop", eventVenue: "Patchwork Commons" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsVenues;