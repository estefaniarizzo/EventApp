import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notification';

describe('Notifications component', () => {
  test('renders correctly', () => {
    const { container } = render(<Notifications />);
    
    // Verificamos que el icono de notificaciones esté presente
    const iconElement = container.querySelector('.notification-icon svg');
    expect(iconElement).toBeInTheDocument();
  });
});
