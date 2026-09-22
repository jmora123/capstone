import { initializeTimes, updateTimes } from './Main';

describe('Booking Form Time Functions', () => {
  // Antes de cada prueba, inyectamos fetchAPI en el objeto global de Jest
  beforeEach(() => {
    window.fetchAPI = jest.fn((date) => {
      // Simulamos la respuesta de la API de Meta
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    });
  });

  test('initializeTimes returns a non-empty array of available times', () => {
    const times = initializeTimes();
    
    // Verificamos que sea un arreglo y que contenga datos
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });

  test('updateTimes returns the updated times array based on selected date', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', date: '2026-10-15' };
    
    const newState = updateTimes(initialState, action);
    
    // Verificamos que siga devolviendo un arreglo tras la actualización
    expect(Array.isArray(newState)).toBe(true);
    // Verificamos que la función reductora invocó nuestra API simulada
    expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
  
  test('updateTimes returns the same state if action type is unhandled', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION', date: '2026-10-15' };
    
    const newState = updateTimes(initialState, action);
    
    // Si la acción no es UPDATE_TIMES, debe devolver el estado intacto
    expect(newState).toEqual(initialState);
  });
});