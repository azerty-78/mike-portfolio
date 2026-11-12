import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le hero du portfolio', () => {
  render(<App />);
  expect(screen.getByText(/INGÉNIEUR LOGICIEL BASÉ AU CAMEROUN/i)).toBeInTheDocument();
});
