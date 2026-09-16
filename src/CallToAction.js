import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
          <button className="btn-primary">Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
        <div className="img-placeholder">Hero Dish Image</div>
      </div>
    </section>
  );
}

export default CallToAction;