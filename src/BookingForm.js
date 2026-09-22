import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  // Inicializamos los campos vacíos para que coincidan con el estado inicial esperado por los tests
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('Birthday');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validación para habilitar o deshabilitar el botón de envío
  const isFormValid = date && time && guests >= 1 && guests <= 10 && occasion;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitting(true);
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          required
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
          }}
          aria-describedby="date-help"
        />
        <small id="date-help" style={{ display: 'block', fontSize: '0.85em', color: '#555' }}>
          Selecciona el día para tu reserva.
        </small>
      </div>

      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
          aria-describedby="time-help"
        >
          <option value="" disabled>Selecciona una hora</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        <small id="time-help" style={{ display: 'block', fontSize: '0.85em', color: '#555' }}>
          Elige una hora disponible del restaurante.
        </small>
      </div>

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
        <small id="guests-help" style={{ display: 'block', fontSize: '0.85em', color: '#555' }}>
          Capacidad de 1 a 10 personas por mesa.
        </small>
      </div>

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
        </select>
        <small id="occasion-help" style={{ display: 'block', fontSize: '0.85em', color: '#555' }}>
          Indícanos si celebras algo especial.
        </small>
      </div>

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        aria-label="On Click"
        style={{ padding: '10px', cursor: isFormValid ? 'pointer' : 'not-allowed' }}
      >
        {isSubmitting ? 'Procesando reserva...' : 'Make Your reservation'}
      </button>
    </form>
  );
};

export default BookingForm;