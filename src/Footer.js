import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  // Helper function to ensure page scrolls to top on link click
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
            <li><Link to="/menu" onClick={scrollToTop}>Menu</Link></li>
            <li><Link to="/booking" onClick={scrollToTop}>Reservations</Link></li>
            <li><Link to="/order" onClick={scrollToTop}>Order Online</Link></li>
            <li><Link to="/login" onClick={scrollToTop}>Login</Link></li>
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