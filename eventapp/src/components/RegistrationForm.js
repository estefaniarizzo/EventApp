// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ event, onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ eventId: event.id })
      });
      if (response.ok) {
        // Actualizar el estado local o realizar otras acciones después del registro exitoso
        onRegister();
        alert('¡Registro exitoso!');
      } else {
        // Manejar errores de la solicitud
        const data = await response.json();
        alert(data.message || 'Error al registrar. Inténtelo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
      alert('Error al procesar la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className="registration-form-container">
      <h2>Registro para {event.title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit-register">Enviar</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
