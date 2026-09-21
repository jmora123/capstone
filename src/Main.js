import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

// 1. Modificamos initializeTimes para que obtenga la fecha de hoy
export function initializeTimes() {
  const today = new Date();
  // Llamamos a la API global pasando la fecha de hoy
  return window.fetchAPI(today);
}

// 2. Modificamos updateTimes para que procese la fecha seleccionada por el usuario
export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    // Convertimos la fecha (que viene como texto desde el formulario) a un objeto Date
    const selectedDate = new Date(action.date);
    // Llamamos a la API para obtener las horas disponibles de ESE día
    return window.fetchAPI(selectedDate);
  }
  return state;
}

function Main() {
  // El useReducer se mantiene igual, pero ahora ejecuta las nuevas funciones
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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
            />
          } 
        />
      </Routes>
    </main>
  );
}

export default Main;