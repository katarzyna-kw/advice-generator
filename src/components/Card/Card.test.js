import { render, screen } from '@testing-library/react';
import Card from '../Card'

test('renders Card', () => {
  render(<Card />);
  const cardElement = screen.getByTestId('card');
  expect(cardElement).toBeInTheDocument();
});