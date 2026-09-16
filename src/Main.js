import React from 'react';

function Main() {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="btn-primary">Reserve a Table</button>
        </div>
        <div className="hero-image">
          <div className="img-placeholder">Hero Dish Image</div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights">
        <div className="highlights-header">
          <h2>This weeks specials!</h2>
          <button className="btn-primary">Online Menu</button>
        </div>
        <div className="specials-grid">
          <article className="card">
            <div className="card-img-placeholder">Greek Salad</div>
            <div className="card-content">
              <div className="card-title">
                <h3>Greek Salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p>The famous greek salad of crispy romaine lettuce, peppers, olives and our Chicago style feta cheese.</p>
              <a href="#order" className="order-link">Order a delivery</a>
            </div>
          </article>

          <article className="card">
            <div className="card-img-placeholder">Bruschetta</div>
            <div className="card-content">
              <div className="card-title">
                <h3>Bruschetta</h3>
                <span className="price">$5.99</span>
              </div>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <a href="#order" className="order-link">Order a delivery</a>
            </div>
          </article>

          <article className="card">
            <div className="card-img-placeholder">Lemon Dessert</div>
            <div className="card-content">
              <div className="card-title">
                <h3>Lemon Dessert</h3>
                <span className="price">$5.00</span>
              </div>
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <a href="#order" className="order-link">Order a delivery</a>
            </div>
          </article>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* About Section */}
      <section className="about">
        <div className="about-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to start their dream restaurant.</p>
        </div>
        <div className="about-images">
          <div className="img-placeholder">Chefs Mario and Adrian</div>
        </div>
      </section>
    </main>
  );
}

export default Main;