import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon main heading', () => {
  render(<App />);

  // Specifically searches for the h1 heading with the text "Little Lemon"
  const headingElement = screen.getByRole('heading', { name: /Little Lemon/i, level: 1 });

  expect(headingElement).toBeInTheDocument();
});