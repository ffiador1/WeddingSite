// Header.js

import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Header() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand" href="/">
            <h1 className="site-title">Florina & Emilio</h1>
            <h4 className="d-block" style={{color:'white'}}>Celebrating Love</h4>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/venue">Venue Info</a></li>
              <li><a href="/team">Bridal Team</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/rsvp">RSVP</a></li>
              {/* Add more links as needed */}
            </ul>
          </div>
     
        </div>
      </nav>
    </header>
  );
}

export default Header;
