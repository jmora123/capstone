import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon main heading', () => {
  render(<App />);

  // Busca específicamente el encabezado h1 con el texto "Little Lemon"
  const headingElement = screen.getByRole('heading', { name: /Little Lemon/i, level: 1 });

  expect(headingElement).toBeInTheDocument();
});