
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/bokd-high-resolution-logo-transparent.png'
import search_icon from '../../assets/search-2906.png'
import login_icon from '../../assets/user-3296.png'
import { useRef, useState, useContext } from 'react';
import {useData} from '../../context/DataContext'; 
import { AuthContext } from '../../context/AuthContext'; //backend


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { tickets, venues } = useData();
  const { user, logout } = useContext(AuthContext); //backend usecontext solved whitepage issue
  const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };
  const handleLogout = () => { //backend
    logout();        // Clear auth state + localStorage
    navigate('/');   // Redirect user to homepage (or login page if you want)
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const allItems = [...tickets, ...venues];
    const filtered = allItems.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setResults(filtered);
 };

  return (
    <div className='navbar'>
      <Link to="/"><img src={logo} alt="" className='logo' /></Link>
      <ul>
        <li><Link to="/tickets">Tickets</Link></li>
        <li><Link to="/venues">Venues</Link></li>
        <li><Link to="/event-types">Event Types</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>

      <div className='nvsearch-box'>
        <input  
          type="text"
          placeholder="Search tickets or venues..."
          value={query}
          onChange={handleSearch}
        />
        <img src={search_icon} alt="" />

        {query && results.length > 0 && (
        <div className="search-dropdown">
            {results.map((item) => (
              <Link
                key={`${item.id}-${item.name}`}
                to={item.path}
                onClick={() => {
                  setQuery('');
                  setResults([]);
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div> 
      

      <div className='login' ref={dropdownRef} onMouseLeave={handleMouseLeave}>
        <button className='login-btn' onClick={handleDropdownToggle}>
          <img src={login_icon} alt="" />
        </button>
        <div
          id="icon-dropdown"
          className={`dropdown-content${dropdownOpen ? " show" : ""}`}
        >
          
          {!user ? ( //backend
          <Link to="/login">Login/Signup</Link>
          ): (
            <>
          <Link to="/manage-booking">Manage Booking</Link>
          <Link to="/account-settings">Account Settings</Link>
          <Link to="/" onClick={(e) => { e.preventDefault();  handleLogout();}} > Logout </Link> {/* backend */}
          </>
          )} 
        </div>
      </div>
    </div>
  );
};

export default Navbar;

