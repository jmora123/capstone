import React from 'react';

function ConfirmedBooking() {
  return (
    <section style={{ padding: '4rem 10%', textAlign: 'center', minHeight: '50vh' }}>
      <h1 style={{ color: '#495E57' }}>Booking Confirmed!</h1>
      <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', color: '#333' }}>
        Your table reservation has been successfully submitted. We look forward to seeing you at Little Lemon!
      </p>
    </section>
  );
}

export default ConfirmedBooking;