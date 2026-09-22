import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('HTML5 Form Validation', () => {
  const availableTimes = ['17:00', '18:00'];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  test('Date input has required attribute', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('required');
  });

  test('Time select has required attribute', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('Guests input has required, min, and max attributes', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('Occasion select has required attribute', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });
});

describe('JavaScript Form Validation and Submission', () => {
  const availableTimes = ['17:00', '18:00'];
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  test('Submit button is disabled initially (invalid state)', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
    const submitButton = screen.getByRole('button', { name: /on click/i });
    
    // El botón debe estar deshabilitado porque los campos fecha, hora y ocasión están vacíos al inicio
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is disabled if guests are outside valid range (invalid state)', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
    
    // Llenamos los campos pero ponemos un valor inválido (0) en invitados
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2026-10-15' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });

    const submitButton = screen.getByRole('button', { name: /on click/i });
    
    // El botón debe seguir deshabilitado
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is enabled and calls submitForm when all fields are valid', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);

    // Llenamos el formulario con datos válidos
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2026-10-15' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Anniversary' } });

    const submitButton = screen.getByRole('button', { name: /on click/i });

    // El botón ahora debe estar habilitado
    expect(submitButton).toBeEnabled();

    // Hacemos clic en el botón
    fireEvent.click(submitButton);

    // Verificamos que se haya enviado la información correctamente
    expect(submitForm).toHaveBeenCalledWith({
      date: '2026-10-15',
      time: '17:00',
      guests: '4',
      occasion: 'Anniversary'
    });
  });
});