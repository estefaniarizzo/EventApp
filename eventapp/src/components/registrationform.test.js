import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

describe('RegistrationForm component', () => {
  test('renders registration form correctly', () => {
    // Renderiza el formulario de registro
    const { getByLabelText, getByRole } = render(<RegistrationForm event={{ title: 'Evento de ejemplo' }} />);

    // Verifica que se muestren los campos de nombre y correo electrónico
    expect(getByLabelText('Nombre:')).toBeInTheDocument();
    expect(getByLabelText('Email:')).toBeInTheDocument();

    // Verifica que se muestre el botón de envío
    expect(getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
  });
});
