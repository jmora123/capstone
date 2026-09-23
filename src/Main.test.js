import { initializeTimes, updateTimes } from './Main';

describe('Booking Form Time Functions', () => {
  // Inject mock fetchAPI function into Jest global window object before each test
  beforeEach(() => {
    window.fetchAPI = jest.fn((date) => {
      // Simulate Meta API response
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    });
  });

  test('initializeTimes returns a non-empty array of available times', () => {
    const times = initializeTimes();
    
    // Verify times is an array and contains elements
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });

  test('updateTimes returns the updated times array based on selected date', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UPDATE_TIMES', date: '2026-10-15' };
    
    const newState = updateTimes(initialState, action);
    
    // Verify state update returns an array from the mock API
    expect(Array.isArray(newState)).toBe(true);
    expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  });
  
  test('updateTimes returns the same state if action type is unhandled', () => {
    const initialState = ['17:00', '18:00'];
    const action = { type: 'UNKNOWN_ACTION', date: '2026-10-15' };
    
    const newState = updateTimes(initialState, action);
    
    // Unhandled action types must leave state intact
    expect(newState).toEqual(initialState);
  });
});