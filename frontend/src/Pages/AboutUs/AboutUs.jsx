// import React from 'react';
// import './AboutUs.css';

// const AboutUs = () => {
//   return (
//     <div className="about-us-page">
//       <section className="about-section">
//         <h1 class="abt-h1">About BOKD</h1>
//         <p>
//           BOKD is a modern event management platform built by a group of software engineering students. 
//           It helps organizers plan, manage, and promote their events with ease, while offering attendees a smooth and secure ticketing experience.
//         </p>
//       </section>

//       <section className="story-section">
//         <h2>Why We Built BOKD</h2>
//         <p>
//           During our studies, we noticed common problems in event planning: disconnected tools, manual processes, and poor communication. 
//           We created BOKD as a one-stop solution to bring everything together in a single, easy-to-use platform.
//         </p>
//       </section>

//       <section className="features-section">
//         <h2>Key Features</h2>
//         <ul class="abt-ul">
//           <li><strong>Event Creation & Booking</strong> – Host and manage events with a few clicks</li>
//           <li><strong>Online Payments</strong> – Secure ticketing with Stripe and PayPal</li>
//           <li><strong>Real-Time Notifications</strong> – Keep users updated instantly</li>
//           <li><strong>Admin Dashboard</strong> – Control everything from one place</li>
//         </ul>
//       </section>

//       <section className="team-section">
//         <h2>Our Team</h2>
//         <p>
//           We are a team of passionate students with a shared goal: to build something meaningful. 
//           Each of us contributed to the design, development, and testing of BOKD using modern technologies like React and Node.js.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;



// =========================
// AboutUs.jsx
// =========================

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      {/* ========================= */}
      {/* === About Section === */}
      {/* ========================= */}
      <section className="about-us">
        <div className="about-container">
          <div className="about-text">
            <h1>About BOKD</h1>
            <h4 className="sub">Our Vision</h4>
            <p>
              BOKD is a modern event management platform built by software engineering students.
              It helps organizers plan, manage, and promote events easily, while giving attendees a secure ticketing experience.
            </p>
            <p>
              We noticed common problems in event planning: disconnected tools, manual processes, and poor communication.
              We created BOKD to solve all these issues in a single, easy-to-use platform.
            </p>
          </div>
          {/* Image representing the About section */}
          <img src="/images/about.jpg" alt="About" className="about-img" />
        </div>
      </section>

      {/* ========================= */}
      {/* === Partners Section === */}
      {/* ========================= */}
      <section className="partners-section">
        <div className="partners-container">
          <h2>Our Partners</h2>
          <p>
            We are grateful for the support of our partners who help us deliver a seamless event experience.
          </p>
          <div className="partners-logos">
            <img src="/images/aws.png" alt="AWS" className="logo aws" />
            <img src="/images/atilim.png" alt="Atilim University" className="logo atilim" />
            <img src="/images/google.png" alt="Google" className="logo google" />
            <img src="/images/paypal.png" alt="PayPal" className="logo paypal" />
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* === Why BOKD Section === */}
      {/* ========================= */}
      <section className="why-section">
        <div className="why-container">
          <h1>Why BOKD</h1>
          <h4 className="sub">Our Aim</h4>
          <p>
            <strong>BOKD brings together event creation, booking, secure payments, real-time notifications.</strong>
          </p>
          <ul className="why-features">
            <li><strong>Event Creation & Booking</strong> – Host and manage events with just a few clicks</li>
            <li><strong>Online Payments</strong> – Secure ticketing with Stripe and PayPal</li>
            <li><strong>Real-Time Notifications</strong> – Keep users updated instantly</li>          
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;


