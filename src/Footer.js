import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="img-placeholder">Logo</div>
        </div>
        <div className="footer-nav">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Lemon St, Chicago, IL</p>
          <p>+1 (555) 019-2834</p>
          <p>info@littlelemon.com</p>
        </div>
        <div className="footer-social">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;