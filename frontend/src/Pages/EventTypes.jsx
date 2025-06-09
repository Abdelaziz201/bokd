// import React from 'react'
// import { Link } from 'react-router-dom'
// import './EventTypes.css'

// export default function EventTypes() {
//   return (
//     <div className='ETP-container'>
//       <h1 className='ETP-title'>Event Types</h1>
//       <div className='ETP-content'>
//         <p className='ETP-description'>
//           Get to know our different Event Types on our website, whether it's a wedding, conference, or concert, we have options to suit every need.
//         </p>
//         <br />
//         <p className='ETP-description'>
//             Our Events is divided into two major types: <strong>1. Tickets Events</strong> and <strong>2. User Events</strong>.
//         </p>
//         <h2 className='ETP-h2'>1. Tickets Events</h2>
//         <p className='ETP-description'> These type of events requires the user to buy tickets to attend them, it contains varios of types, such as: <strong>Music Concerts, Special Movie Nights, Gaming Concerts and many more. </strong></p>
//         <p className='ETP-more'> To see available tickets for these kind of events <Link to="/tickets">Click Here</Link>.</p>
//         <br />
//         <h2 className='ETP-h2'>2. User Events</h2>
//         <p className='ETP-description'> User Events are the events that the user manage themselves, it requires the user to book a venue from our venues collection, then specify the date of the event. These events includes: <strong>Conferences, Seminars, Weddings, Workshops, Birthday Parties and much more. </strong></p>
//         <p className='ETP-more'> Check out our Venue Collection from <Link to="/venues">Here</Link>.</p>

//       </div>
      
//     </div>
//   )
// }



import React from 'react'
import { Link } from 'react-router-dom'
import './EventTypes.css'

export default function EventTypes() {
  return (
    <div className='ETP-container'>
      <h1 className='ETP-title'>Event Types</h1>
      <div className='ETP-content'>
        <p className='ETP-description'>
          Get to know our different Event Types on our website, whether it's a wedding, conference, or concert, we have options to suit every need.
        </p>
        <br />
        <p className='ETP-description'>
            Our Events is divided into two major types: <strong>1. Tickets Events</strong> and <strong>2. User Events</strong>.
        </p>
        <h2 className='ETP-h2'>1. Tickets Events</h2>
        <p className='ETP-description'> These type of events requires the user to buy tickets to attend them, it contains varios of types, such as: <strong>Music Concerts, Special Movie Nights, Gaming Concerts and many more. </strong></p>
        <div className='ETP-img-sec'>
          <img className='ETP-img' src="src/assets/concert1.jpg" alt="" />
          <img className='ETP-img' src="images/event2.jpg" alt="" />
        </div>
        <p className='ETP-more'> To see available tickets for these kind of events <Link to="/tickets"><button className='ETP-btn'>Click Here</button></Link></p>
        <br />
        <h2 className='ETP-h2'>2. User Events</h2>
        <p className='ETP-description'> User Events are the events that the user manage themselves, it requires the user to book a venue from our venues collection, then specify the date of the event. These events includes: <strong>Conferences, Seminars, Weddings, Workshops, Birthday Parties and much more. </strong></p>
        <div className='ETP-img-sec'>
          <img className='ETP-img' src="images/venues/wedding1.jpg" alt="" />
          <img className='ETP-img' src="images/venues/Seminars1.jpg" alt="" />
        </div>
        <p className='ETP-more'> Check out our Venue Collection from <Link to="/venues"><button className='ETP-btn'>Here</button></Link></p>

      </div>
      
    </div>
  )
}
