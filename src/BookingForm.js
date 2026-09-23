import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  // Initialize form state fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');
  
  // Submission control and error handling state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Form validation checks
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isFormValid = date && time && isGuestsValid && occasion;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');
    
    if (isFormValid) {
      setIsSubmitting(true);
      const isSuccess = submitForm({ date, time, guests, occasion });
      
      if (!isSuccess) {
        setSubmitError('The reservation could not be processed at this time. Please try again.');
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px', margin: '0 auto', textAlign: 'left' }}>
      {/* Display error message if submission fails */}
      {submitError && (
        <div style={{ padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '4px' }}>
          {submitError}
        </div>
      )}

      {/* Date input field */}
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          required
          onChange={(e) => {
            setDate(e.target.value);
            // Update available time slots based on the selected date
            dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
          }}
          aria-describedby="date-help"
        />
        <small id="date-help" style={{ display: 'block', fontSize: '0.85em', color: '#555' }}>
          Select the day for your reservation.
        </small>
      </div>

      {/* Time selection field */}
      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
          aria-describedby="time-help"
        >
          <option value="" disabled>Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        <small id="time-help" style={{ display: 'block', fontSize: '0.85em', color: '#555' }}>
          Choose an available time slot from the restaurant.
        </small>
      </div>

      {/* Number of guests field */}
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          required
          onChange={(e) => setGuests(e.target.value)}
          aria-describedby="guests-help"
        />
        {!isGuestsValid && guests !== '' && (
          <span style={{ color: 'red', fontSize: '0.85em', display: 'block', marginTop: '4px' }}>
            Table capacity is strictly between 1 and 10 guests.
          </span>
        )}
        <small id="guests-help" style={{ display: 'block', fontSize: '0.85em', color: '#555' }}>
          Capacity from 1 to 10 people per table.
        </small>
      </div>

      {/* Occasion selection field */}
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          required
          onChange={(e) => setOccasion(e.target.value)}
          aria-describedby="occasion-help"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business</option>
          <option value="Other">Other</option>
        </select>
        <small id="occasion-help" style={{ display: 'block', fontSize: '0.85em', color: '#555' }}>
          Let us know if you are celebrating a special occasion.
        </small>
      </div>

      {/* Submit button with accessible aria-label */}
      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        aria-label="Confirm and make your reservation"
        style={{ 
          padding: '12px', 
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          backgroundColor: isFormValid ? '#F4CE14' : '#ccc',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          color: '#333'
        }}
      >
        {isSubmitting ? 'Processing reservation...' : 'Make Your Reservation'}
      </button>
    </form>
  );
};

export default BookingForm;