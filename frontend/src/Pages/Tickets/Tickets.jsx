import React from 'react'
import { Link } from 'react-router-dom'
import './Tickets.css'


// Ticket format: Image, Event Name, Description, Date & Time, Location, Book Ticket Button
export default function Tickets() {
  return (
    <div className='tpc'>
      <h1 className="tp-head">Available Events For Booking</h1>
      <br />
      <section className="tp-event">
        
        <div className="tp-img">
        <img src="/images/concert1.jpg" alt="" />
        </div>
        <div className="tp-content">
          <h2 className="et">Music Concert</h2>
          <p className="tpp">
            Step into a world where rhythm meets raw energy at <b>Midnight Reverie</b> —an unforgettable concert experience blending soul-stirring melodies, explosive performances, and immersive visuals. Whether it’s the haunting vocals of our headliner, the pulse of live electronic beats, or the surprise collaborations you never saw coming, this is more than just a show—it’s a journey.
           🔥 <b>Featuring: </b> Chart-topping artists & rising stars 
           🎶 <b>Genres:</b> Alternative rock, synth-pop, and experimental sounds 
           🌌 <b>Vibe:</b>  Cinematic lighting, intimate crowd, and electrifying moments
          </p> 
          
          <p className="tpp"><b>Date & Time 📅:</b> 06/06/2025  8:30 pm </p>
          <p className="tpp"><b>Location 📍:</b> Çayyolu </p>
          
          <Link to="/tickets/book"><button className="tp-book-btn">Buy a Ticket</button></Link>
          </div>
      </section>
      <br />
      <section className="tp-event">
      <div className="tp-img">
        <img src="images/event2.jpg" alt="" />
      </div>
        <div className="tp-content">
        <h2 className="et">Outdoors Movie Night</h2>
        <p className="tpp">Lay back under a blanket of stars for <b>Starlight Cinema</b>—an enchanting outdoor movie night where film meets fresh air. With a giant screen under the open sky, cozy seating, and the perfect mix of nostalgia and new favorites, it’s an evening of magic, laughter, and shared stories.
          🎥 <b>Featured Film:</b> A crowd-pleasing classNameic or a hit new release (surprise reveal!)
          🌿 <b>Vibe:</b>  Picnic blankets, twinkling lights, and a warm summer breeze
          🍿 <b>Extras:</b> Gourmet popcorn, food trucks, and pre-show tunes
          Bring your crew, claim your spot, and let the silver screen light up the night. Limited space—reserve your tickets now!
          </p>
          
          <p className="tpp"><b>Date & Time 📅:</b> 20/06/2025 9:00 pm </p>
          <p className="tpp"><b>Location 📍:</b> Yenimahalle </p>

        <Link to="/tickets/book"><button className="tp-book-btn">Buy a Ticket</button></Link>
        </div>
      </section>
      <br />
      <section className="tp-event">
      <div className="tp-img">
        <img src="images/event3.jpg" alt="" />
      </div>
        <div className="tp-content">
        <h2 className="et">Gaming/Cosplay Concert</h2>
        <p className="tpp">Step into a world where fantasy becomes reality at <b>NEXUS</b>—an electrifying fusion of gaming, cosplay, and live performances! Battle it out in epic tournaments, meet legendary voice actors, and witness jaw-dropping cosplay showcases. With pulse-pounding music, immersive VR zones, and surprise guest appearances, this is where gamers and superheroes unite.
          🎮 <b>Highlights:</b>
          • Pro Gaming Tournaments (cash prizes & bragging rights!)
          • Cosplay Contest – Show off your masterpiece & win big
          • Live Concert – High-energy performances from nerdcore & anime-inspired artists
          • Meet & Greets – Iconic creators, streamers & industry legends
          🕹️ <b>Vibe:</b> Neon lights, next-gen demos, and a community of passionate fans
          Gear up—your adventure awaits! Will you play, perform, or conquer? <b>Limited passes available!</b>
          </p>
          
          <p className="tpp"><b>Date & Time 📅:</b> 28/06/2025  4:00 pm </p>
          <p className="tpp"><b>Location 📍:</b> Altındağ </p>

        <Link to="/tickets/book"><button className="tp-book-btn">Buy a Ticket</button></Link>
        </div>
      </section>
      <br />
      
    </div>
  )
}


