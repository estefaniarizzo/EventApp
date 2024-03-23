import React from 'react';
import { render } from '@testing-library/react';
import EventCard from './eventcard';

describe('EventCard component', () => {
  test('renders correctly with event data', () => {
    // Datos de ejemplo para el evento
    const eventData = {
      id: 1,
      title: 'Evento de ejemplo',
      body: 'Descripción del evento de ejemplo'
    };

    // Función mock para el evento de detalles
    const mockOnDetailsClick = jest.fn();

    // Renderizar el componente EventCard con los datos del evento y la función mock
    const { getByText } = render(
      <EventCard event={eventData} onDetailsClick={mockOnDetailsClick} />
    );

    // Verificar que el título del evento está presente en el componente
    const titleElement = getByText(eventData.title);
    expect(titleElement).toBeInTheDocument();

    // Verificar que la descripción del evento está presente en el componente
    const descriptionElement = getByText(eventData.body);
    expect(descriptionElement).toBeInTheDocument();

    // Verificar que el botón de detalles está presente en el componente
    const detailsButton = getByText(/Detalles/i);
    expect(detailsButton).toBeInTheDocument();
  });
});
