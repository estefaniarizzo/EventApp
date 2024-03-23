import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';

describe('Home component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Home />);
    const titleElement = getByText(/Eventos Próximos/i);
    expect(titleElement).toBeInTheDocument();
  });
});