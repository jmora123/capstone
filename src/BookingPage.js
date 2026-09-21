import React from 'react';
import BookingForm from './BookingForm';

function BookingPage(props) {
  return (
    <section style={{ padding: '4rem 10%', textAlign: 'center', minHeight: '50vh' }}>
      <h1>Book a Table</h1>
      <p style={{ marginBottom: '2rem' }}>Please fill in the form below to reserve your table.</p>
      
      {/* Pasamos las props recibidas de Main.js hacia el BookingForm */}
      <BookingForm 
        availableTimes={props.availableTimes} 
        dispatch={props.dispatch} 
      />
    </section>
  );
}

export default BookingPage;