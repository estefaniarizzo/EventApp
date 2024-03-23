import React,{ useState }from 'react';
import './Evententdetails.css';
import RegistrationForm from './RegistrationForm';
const EventDetails = ({ event, onClose }) => {
    const [registeredCount, setRegisteredCount] = useState(event.registered);

  const handleRegistration = async () => {
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ eventId: event.id })
    });
    if (response.ok) {
      setRegisteredCount(registeredCount + 1);
    }
  };
    return (
      <div className="event-details">
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p><strong>Fecha:</strong> {event.date}</p>
        <p><strong>Ubicación:</strong> {event.location}</p>
        <p><strong>Capacidad:</strong> {event.capacity}</p>
        <p><strong>Registrados:</strong> {event.registered}</p>
        <RegistrationForm event={event} onRegister={handleRegistration} />
        <button onClick={onClose}>Regresar</button>
      </div>
    );
  };

export default EventDetails;
