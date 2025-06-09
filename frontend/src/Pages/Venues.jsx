// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import { Link } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./Venues.css";

// const venueSections = [
//   {
//     title: "Conference Venues",
//     link: "/venues/conference",
//     images: ["conference7.jpg", "conference9.jpg", "conference10.jpg", "conference10.jpg"]
//   },
//   {
//     title: "Wedding Venues",
//     link: "/venues/wedding",
//     images: ["wedding1.jpg", "wedding2.jpg", "wedding3.jpg", "wedding3.jpg"]
//   },
//   {
//     title: "Birthday Venues",
//     link: "/venues/birthday",
//     images: ["birthday1.jpg", "birthday2.jpg", "birthday3.jpg", "birthday3.jpg"]
//   },
//   {
//     title: "Concert Venues",
//     link: "/venues/Concert",
//     images: ["concert1.avif", "concert2.avif", "concert3.avif", "concert5.avif"]
//   },
//   {
//     title: "Graduation Parties",
//     link: "/venues/graduation",
//     images: ["Graduation1.jpg", "Graduation2.jpg", "Graduation3.jpg"]
//   },
//   {
//     title: "Retirement Party",
//     link: "/venues/Retirement",
//     images: ["retirement1.jpg", "retirement2.jpg", "retirement3.jpg", "retirement4.jpg"]
//   },
//   {
//     title: "Workshops",
//     link: "/venues/Workshops",
//     images: ["Workshops1.avif", "Workshops2.avif", "Workshops3.avif", "Workshops4.avif"]
//   },
//   {
//     title: "Private Parties",
//     link: "/venues/Private",
//     images: ["Private1.avif", "Private2.avif", "Private3.avif", "Private4.avif"]
//   },
//   {
//     title: "Seminars",
//     link: "/venues/Seminars",
//     images: ["Seminars1.avif", "Seminars2.avif", "Seminars3.avif", "Seminars4.avif"]
//   }
// ];

// export default function Venues() {
//   return (
//     <div className="venues-wrapper">
//       {/* Carousel with Links */}
//       <div className="venue-carousel">
//         <Carousel
//           showThumbs={false}
//           autoPlay
//           infiniteLoop
//           interval={4000}
//           showStatus={false}
//           showIndicators={true}
//           swipeable
//         >
//           {venueSections.map((section, i) => (
//             <div key={i} className="carousel-slide-item">
//               <Link to={section.link}>
//                 <img
//                   className="carousel-image"
//                   src={`/images/venues/${section.images[0]}`}
//                   alt={section.title}
//                 />
//                 <p className="carousel-caption">{section.title}</p>
//               </Link>
//             </div>
//           ))}
//         </Carousel>
//       </div>

//       {/* Venue Sections */}
//       <div className="venues-page">
//         {venueSections.map((section, i) => (
//           <section key={i} className="venue-block">
//             <div className="section-header">
//               <h2>{section.title}</h2>
//               <Link to={section.link} className="explore-link">
//                 Explore More &raquo;
//               </Link>
//             </div>
//             <div className="venue-grid wide-grid">
//               {section.images.map((img, index) => (
//                 <div key={index} className="venue-card styled-card">
//                   <img
//                     src={`/images/venues/${img}`}
//                     alt={`${section.title} ${index + 1}`}
//                   />
//                   <div className="venue-info">
//                     <h4>Venue {index + 1}</h4>
//                     <p>Description</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }







import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Venues.css";

const venueSections = [
  {
    title: "Conference Venues",
    link: "/venues/conference",
    name: ["Conference Hall", 
            "Meeting Room", 
            "Seminar Hall", 
            "Board Room"
    ],
    description: ["Ideal for corporate events and meetings", 
                  "Spacious halls with modern amenities", 
                  "Catering and technical support available", 
                  "Flexible seating arrangements"],
    location: ["Kızılay",
                "Incek", 
                "Ulus", 
                "Maltepe"
    ],
    images: ["conference7.jpg", "conference1.jpg", "conference10.jpg", "conference8.jpg"]
  },
  {
    title: "Wedding Venues",
    link: "/venues/wedding",
    name: ["Wedding Hall", 
            "Banquet Hall", 
            "Garden Venue", 
            "Beachfront Venue"
    ],
    description: ["Spacious halls with modern amenities",
                  "Ideal for weddings and receptions", 
                  "Catering and decoration services available", 
                  "Beautiful outdoor settings"],
    location: ["Incek",
                "Karagedik",
                "Çayyolu", 
                "Orencik"
    ],
    images: ["wedding1.jpg", "wedding2.jpg", "wedding3.jpg", "wedding4.jpg"]
  },
  {
    title: "Birthday Venues",
    link: "/venues/birthday",
    name: ["Birthday Hall", 
            "Party Room", 
            "Outdoor Venue", 
            "Themed Venue"
    ],
    description: ["Catering and decoration services available",
                  "Spacious halls with modern amenities",
                  "Ideal for birthday parties and celebrations", 
                  "Fun and engaging activities for kids"],
    location: [ "Yenimahalle",
                "Kizilay", 
                "Altındağ", 
                "Maltepe"
    ],
    images: ["birthday4.jpg", "birthday6.jpg", "birthday3.jpg", "birthday5.jpg"]
  },
  {
    title: "Concert Venues",
    link: "/venues/Concert",
    name: ["Concert Hall",
            "Music Venue", 
            "Theater", 
            "Open Air Stage"
    ],
    description: ["Best for live performances and music events",
                  "Modern sound and lighting systems",
                  "Spacious halls with excellent acoustics",
                  "Ideal for concerts and shows"
    ],
    location: ["Ankara Arena",
               "Incek",
                "Kocatepe",
                "Çankaya"
    ],
    images: ["concert1.jpg", "concert5.jpg", "concert3.jpg", "concert2.jpg"]
  },
  {
    title: "Graduation Parties",
    link: "/venues/graduation",
    name: ["Open Air Venue",
            "Ceremony Venue",
            "Reception Hall"
    ],
    description: ["Outdoor venue with scenic views", 
                  "Open space for ceremonies",
                  "Spacious halls for receptions"
    ],
    location: ["Altındağ",
                "Çankaya", 
                "Yenimahalle"
    ],
    images: ["Graduation1.jpg", "Graduation2.jpg", "Graduation3.jpg"]
  },
  {
    title: "Retirement Party",
    link: "/venues/Retirement",
    name: ["Outdoor Party Venue",
            "Celebration Venue",
            "Farewell Party Room",
            "Outdoor Retirement Venue"
    ],
    description: ["Open air venue with scenic views",
                  "Spacious halls for receptions",
                  "Ideal for retirement celebrations", 
                  "On Beach Party Zone Ideal for retirement parties"
    ],
    location: ["Incek",
                "Çayyolu", 
                "Orencik", 
                "Trabzon"
    ],
    images: ["retirement1.jpg", "retirement2.jpg", "retirement3.jpg", "retirement4.jpg"]
  },
  {
    title: "Workshops",
    link: "/venues/Workshops",
    name: ["Workshop Hall", 
            "Training Room", 
            "Hands-on Space", 
            "Creative Space"
    ],
    description: ["Spacious halls with modern amenities",
                  "Ideal for workshops and training sessions", 
                  "Materials and equipment provided",
                  "Carpentry and welding tools available"
    ],
    location: ["Keçiören",
                "Çankaya", 
                "Yenimahalle", 
                "Mamak"
    ],
    images: ["Workshops1.jpg", "Workshops2.jpg", "Workshops3.jpg", "Workshops4.jpg"]
  },
  {
    title: "Private Parties",
    link: "/venues/Private",
    name: ["Private Event Space",
            "Exclusive Venue",
            "VIP Lounge",
            "Private Garden"
    ],
    description: ["Perfect for intimate gatherings and celebrations",
                  "A private and exclusive setting suitable for parties", 
                  "Catering and decoration services available", 
                  "Personalized service for a memorable experience"
    ],
    location: ["Çankaya",
                "Yenimahalle", 
                "Altındağ",
                "Çayyolu"
    ],
    images: ["Private1.jpg", "Private2.jpg", "Private3.jpg", "Private4.jpg"]
  },
  {
    title: "Seminars",
    link: "/venues/Seminars",
    name: ["Seminar Hall",
            "Lecture Room",
            "Training Center",
            "Presentation Space"

    ],
    description: ["Spacious halls with modern amenities",
                  "Ideal for seminars and training sessions", 
                  "Training materials and equipment provided", 
                  "Flexible seating arrangements"
    ],
    location: ["Kızılay",
                "Çankaya", 
                "Yenimahalle", 
                "Mamak"
    ],
    images: ["Seminars1.jpg", "Seminars2.jpg", "Seminars3.jpg", "Seminars4.jpg"]
  }
];

export default function Venues() {
  return (
    <div className="venues-wrapper">
      {/* Carousel with Links */}
      <div className="venue-carousel">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={4000}
          showStatus={false}
          showIndicators={true}
          swipeable
        >
          {venueSections.map((section, i) => (
            <div key={i} className="carousel-slide-item">
              <Link to={section.link}>
                <img
                  className="carousel-image"
                  src={`/images/venues/${section.images[0]}`}
                  alt={section.title}
                />
                <p className="carousel-caption">{section.title}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Venue Sections */}
      <div className="venues-page">
        {venueSections.map((section, i) => (
          <section key={i} className="venue-block">
            <div className="section-header">
              <h2>{section.title}</h2>
              <Link to={section.link} className="explore-link">
                Explore More &raquo;
              </Link>
            </div>
            <div className="venue-grid wide-grid">
              {section.images.map((img, index) => (
                <div key={index} className="venue-card styled-card">
                  <img
                    src={`/images/venues/${img}`}
                    alt={`${section.title} ${index + 1}`}
                  />
                  <div className="venue-info">
                    <h4>{`${section.name.at(index)}` }</h4>
                    <p>{`${section.description.at(index)}` }</p>
                    <p>📍: {`${section.location.at(index)}` } </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
