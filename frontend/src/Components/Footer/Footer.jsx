import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/bokd-high-resolution-logo-transparent.png'
import facebook from '../../assets/facebook-5222.png'
import linkedin from '../../assets/black-linkedin-logo-15915.png'
import youtube from '../../assets/youtube-123.png'
import insta from '../../assets/black-instagram-transparent-logo-10671.png'

function Footer() {
  return (
    <div className='footer'>
        <div>
            <Link to="/"><img className='flogo' src={logo} alt="" /></Link>
            <ul className='socials'>
                <li><a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a></li>
                <li><a href="https://www.linkedin.com/"><img src={linkedin} alt="LinkedIn" /></a></li>
                <li><a href="https://www.youtube.com/"><img src={youtube} alt="YouTube" /></a></li>
                <li><a href="https://www.instagram.com/"><img src={insta} alt="Instagram" /></a></li>
            </ul>
        </div>
        <div className='f-tic'>
            <Link to="/tickets" className='liTitle'>Tickets</Link>
            <ul className='ulf'>
                <Link to="/tickets" className='est'><li>Book for Event</li></Link>
                <Link to="/manage-booking" className='est'><li>Manage Booking</li></Link>
                <Link to="/Review" className='est'><li>Reviews</li></Link>
            </ul>
        </div>
        <div>
            <Link className='liTitle' to="/venues">Venues</Link>
            <ul className='ulf'>
                <Link to="/venues" className='est'><li>Explore Venues</li></Link>
                <Link to="/application" className='est'><li>Apply as a Venue</li></Link>
                <Link to="/report-venue" className='est'><li>Report a venue</li></Link>
            </ul>
        </div>
        <div>
            <Link className='liTitle' to="/about">About Us</Link>
            <ul className='ulf'>
                <Link className='est' to="/contact-us"><li>Contact Us</li></Link> 
                <Link className='est' to="/report-problem"><li>Report a Problem</li></Link> 
                <Link className='est' to="/FAQ"><li>FAQ</li></Link>
              

            </ul>
        </div>
    </div>
  )
}

export default Footer
