import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
<<<<<<< Updated upstream
  const linkElement = screen.getByText(/learn react/i);
=======
  const linkElement = screen.getByText(/new feature/i);
>>>>>>> Stashed changes
  expect(linkElement).toBeInTheDocument();
});
