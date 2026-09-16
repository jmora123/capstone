import React from 'react';

function Specials() {
  return (
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
  );
}

export default Specials;