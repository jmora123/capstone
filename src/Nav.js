import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  // Helper function to ensure page scrolls to top on link click
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
        <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
        <li><Link to="/menu" onClick={scrollToTop}>Menu</Link></li>
        <li><Link to="/booking" onClick={scrollToTop}>Reservations</Link></li>
        <li><Link to="/order" onClick={scrollToTop}>Order Online</Link></li>
        <li><Link to="/login" onClick={scrollToTop}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;