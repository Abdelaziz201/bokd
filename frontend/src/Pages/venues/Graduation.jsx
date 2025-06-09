// import React from "react";
// import { Link } from "react-router-dom";
// import "./Explore More.css";

// const GraduationVenues = () => {
//   return (
//     <div className="explore-container">
//       <h1>Graduation Parties</h1>

//       <div className="explore-card">
//         <img src="/images/venues/Graduation1.jpg" alt="Graduation 1" />
//         <div className="explore-info">
//           <h2>Venue 1</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Graduation Party", eventVenue: "Venue 1" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Graduation2.jpg" alt="Graduation 2" />
//         <div className="explore-info">
//           <h2>Venue 2</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Graduation Party", eventVenue: "Venue 2" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>

//       <div className="explore-card">
//         <img src="/images/venues/Graduation3.jpg" alt="Graduation 3" />
//         <div className="explore-info">
//           <h2>Venue 3</h2>
//           <p>Description</p>
//           <Link
//             to="/book-venue"
//             state={{ eventType: "Graduation Party", eventVenue: "Venue 3" }}
//             className="book-btn"
//           >
//             Book a Venue
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GraduationVenues;




import React from "react";
import { Link } from "react-router-dom";
import "./Explore More.css";

const GraduationVenues = () => {
  return (
    <div className="explore-container">
      <h1>Graduation Parties</h1>

      <div className="explore-card">
        <img src="/images/venues/Graduation1.jpg" alt="Graduation 1" />
        <div className="explore-info">
          <h2>Laurel Grove Gardens</h2>
          <p>Outdoor venue with scenic views</p>
          <p>📍: Altındağ</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Graduation Party", eventVenue: "Laurel Grove Gardens" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Graduation2.jpg" alt="Graduation 2" />
        <div className="explore-info">
          <h2>Whispering Pines Arena</h2>
          <p>Open space for ceremonies</p>
          <p>📍: Çankaya</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Graduation Party", eventVenue: "Whispering Pines Arena" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>

      <div className="explore-card">
        <img src="/images/venues/Graduation3.jpg" alt="Graduation 3" />
        <div className="explore-info">
          <h2>The Lantern Room</h2>
          <p>Spacious halls for receptions</p>
          <p>📍: Yenimahalle</p>
          <Link
            to="/book-venue"
            state={{ eventType: "Graduation Party", eventVenue: "The Lantern Room" }}
            className="book-btn"
          >
            Book a Venue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GraduationVenues;