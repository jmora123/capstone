import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

// 1. Función para definir el estado inicial de las horas disponibles
export function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

// 2. Función reductora para actualizar las horas según la fecha seleccionada
export function updateTimes(state, action) {
  // Por ahora devuelve las mismas horas independientemente de la fecha
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function Main() {
  // 3. Inicializamos useReducer enviando la función reductora y la función inicializadora
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