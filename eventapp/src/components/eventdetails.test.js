import React from 'react';
import { render } from '@testing-library/react';
import EventDetails from './EventDetails';

describe('EventDetails component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<EventDetails event={{}} onClose={() => {}} />);
    const closeButton = getByText(/Regresar/i);
    expect(closeButton).toBeInTheDocument();
  });
});

