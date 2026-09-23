import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, bookingData, submitForm, clearBookings }) {
  return (
    <section style={{ padding: '4rem 10%', textAlign: 'center', minHeight: '50vh' }}>
      <h1>Book a Table</h1>
      <p style={{ marginBottom: '2rem' }}>Please fill in the form below to reserve your table.</p>

      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm}
      />

      {/* Table rendering saved reservations stored in bookingData */}
      <div style={{ marginTop: '3rem' }}>
        <h2>Reservations List</h2>
        {bookingData && bookingData.length > 0 ? (
          <>
            <table style={{ margin: '1.5rem auto', borderCollapse: 'collapse', width: '100%', maxWidth: '600px' }}>
              <thead>
                <tr style={{ backgroundColor: '#495E57', color: '#F4CE14' }}>
                  <th style={{ padding: '12px', border: '1px solid #ccc' }}>Date</th>
                  <th style={{ padding: '12px', border: '1px solid #ccc' }}>Time</th>
                  <th style={{ padding: '12px', border: '1px solid #ccc' }}>Guests</th>
                  <th style={{ padding: '12px', border: '1px solid #ccc' }}>Occasion</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.map((booking, index) => (
                  <tr key={index}>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{booking.date}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{booking.time}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{booking.guests}</td>
                    <td style={{ padding: '10px', border: '1px solid #ccc' }}>{booking.occasion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Clear Reservations Button */}
            <button 
              onClick={clearBookings}
              style={{
                marginTop: '1rem',
                padding: '10px 20px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              aria-label="Clear all saved reservations"
            >
              Clear All Reservations
            </button>
          </>
        ) : (
          <p style={{ color: '#666', marginTop: '1rem' }}>No bookings made yet.</p>
        )}
      </div>
    </section>
  );
}

export default BookingPage;