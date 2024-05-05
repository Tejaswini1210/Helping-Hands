import React from 'react';
import { Link } from 'react-router-dom';
const Nav=()=>{
    return(
        <nav className="navbar" data-navbar>
         <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src="hhLogo.png" alt="E-Worker Logo" />
        </Link>
        </div>
      </div>
        <div> 
        <div className="header-container">
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/location">Location</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Nav;