import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div>
          {/* Placeholder for the Footer Logo */}
          <div className="img-placeholder" style={{ height: '100px', width: '100px', backgroundColor: '#EDEFEE' }}>
            <span style={{ color: '#495E57', fontWeight: 'bold' }}>Logo</span>
          </div>
        </div>

        {/* Doormat Navigation Section */}
        <div>
          <h4>Doormat Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4>Contact</h4>
          <ul>
            <li>123 Lemon Street, Chicago, IL</li>
            <li>(312) 555-0198</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;