import React from 'react';

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="rating">★★★★★</div>
          <h4>Sara L.</h4>
          <p>"Great food and vibrant atmosphere!"</p>
        </div>
        <div className="testimonial-card">
          <div className="rating">★★★★★</div>
          <h4>John D.</h4>
          <p>"The best Mediterranean food in town."</p>
        </div>
        <div className="testimonial-card">
          <div className="rating">★★★★☆</div>
          <h4>Maria R.</h4>
          <p>"Loved the lemon dessert!"</p>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;