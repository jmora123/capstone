import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the Choose date label in BookingForm', () => {
  // 1. Creamos "datos falsos" (mocks) porque BookingForm los exige para funcionar
  const availableTimes = ['17:00', '18:00'];
  const dispatch = jest.fn();

  // 2. Renderizamos el componente pasándole los datos de prueba
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

  // 3. Buscamos el texto estático que sabemos que existe en el componente
  const labelElement = screen.getByText("Choose date");
  
  // 4. Verificamos que el elemento se encuentre en el documento
  expect(labelElement).toBeInTheDocument();
});