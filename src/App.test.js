import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world title', () => {
  render(<App />);
  const titleElement = screen.getByText(/hello world/i);
  expect(titleElement).toBeInTheDocument();
});
