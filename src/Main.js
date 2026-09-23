import React, { useReducer, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

export function initializeTimes() {
  const today = new Date();
  return window.fetchAPI ? window.fetchAPI(today) : ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    const selectedDate = new Date(action.date);
    return window.fetchAPI ? window.fetchAPI(selectedDate) : state;
  }
  return state;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  
  const navigate = useNavigate();

  // 1. Initialize state by reading localStorage for previously saved bookings
  const [bookingData, setBookingData] = useState(() => {
    const savedBookings = localStorage.getItem('bookings');
    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  // 2. Automatically sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookingData));
  }, [bookingData]);

  // Function to handle form submission
  const submitForm = (formData) => {
    const isSubmitted = window.submitAPI ? window.submitAPI(formData) : true;
    if (isSubmitted) {
      // Append the new reservation to the state array
      setBookingData((prevData) => [...prevData, formData]);
      navigate('/confirmed');
      return true;
    }
    return false;
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              dispatch={dispatch} 
              bookingData={bookingData}
              submitForm={submitForm}
            />
          } 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;