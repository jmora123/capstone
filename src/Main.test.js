import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns the correct expected value', () => {
  // 1. Definimos el valor exacto que esperamos recibir
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  
  // 2. Ejecutamos la función
  const result = initializeTimes();
  
  // 3. Comparamos el resultado devuelto con lo que esperábamos
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same state provided', () => {
  // 1. Definimos un estado inicial y una acción simulada
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES', date: '2026-10-15' };
  
  // 2. Ejecutamos la función updateTimes
  const result = updateTimes(initialState, action);
  
  // 3. Validamos que, por ahora, devuelva exactamente el mismo estado inicial
  expect(result).toEqual(initialState);
});