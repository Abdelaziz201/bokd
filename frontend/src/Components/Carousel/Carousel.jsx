// import React from 'react';
// import './Carousel.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Link } from 'react-router-dom';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// const SwiperCarousel = () => {
//   return (
//     <div className="swiper-container">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3500,
//           disableOnInteraction: false, pauseOnMouseEnter: true
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={{
//           nextEl: '.custom-next',
//           prevEl: '.custom-prev',
//         }}
//         loop={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="src/assets/concert1.jpg" alt="Slide 1" />
//           <div className="slide-content">
//             <h3 className='ch3'>Book Your Ticket Now!</h3>
//             <p>Discover various upcoming events to book a ticket for them</p>
//             <Link to="/tickets"><button>Book Now!</button></Link>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="images/venues/birthday5-cropped.jpg" alt="Slide 2" />
//           <div className="slide-content">
//             <h3 className='ch3'>Looking For a Venue?</h3>
//             <p>Explore different venues according to your prefrences!</p>
//             <Link to="/venues"><button>Explore More</button></Link>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="images/organize-cropped.jpeg" alt="Slide 3" />
//           <div className="slide-content">
//             <h3 className='ch3'>Organizing Never Been Easier</h3>
//             <p>Experience the easy organizing through a simple and effective dashboard</p>
//             <Link to="/dashboard"><button>Go to Dashboard</button></Link>
//           </div>
//         </SwiperSlide>
//         <div className="custom-navigation">
//           <div className="custom-prev" style={{ fontSize: '32px' }}>‹</div>
//           <div className="custom-next" style={{ fontSize: '32px' }}>›</div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperCarousel;



import React from 'react';
import './Carousel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperCarousel = () => {
  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false, pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/venues/birthday5-cropped.jpg" alt="Slide 2" />
          <div className="slide-content">
            <h3 className='ch3'>Looking For a Venue?</h3>
            <p>Explore different venues according to your prefrences!</p>
            <Link to="/venues"><button>Explore More</button></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/concert1.jpg" alt="Slide 1" />
          <div className="slide-content">
            <h3 className='ch3'>Book Your Ticket Now!</h3>
            <p>Discover various upcoming events to book a ticket for them</p>
            <Link to="/tickets"><button>Book Now!</button></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/venues/Graduation1.jpg" alt="Slide 3" />
          <div className="slide-content">
            <h3 className='ch3'>Check our Various Types of Events</h3>
            <p>We have a wide range of events to choose from, tailored to your interests.</p>
            <Link to="/event-types"><button>Check Event Types</button></Link>
          </div>
        </SwiperSlide>
        <div className="custom-navigation">
          <div className="custom-prev" style={{ fontSize: '32px' }}>‹</div>
          <div className="custom-next" style={{ fontSize: '32px' }}>›</div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;