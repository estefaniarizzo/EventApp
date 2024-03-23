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
      <>
      
      <div className="event-details">
         <button  className='button' onClick={onClose}>Regresar</button>
         <br/>
         <br/>
        <h2 style={{marginLeft:'20px'}} >{event.title}</h2>
        <p style={{marginLeft:'20px'}}>{event.description}</p>
        <p  style={{marginLeft:'20px'}}><strong>Fecha:</strong> {event.date}</p>
        <p  style={{marginLeft:'20px'}}><strong>Ubicación:</strong> {event.location}</p>
        <p  style={{marginLeft:'20px'}}><strong>Capacidad:</strong> {event.capacity}</p>
        <p  style={{marginLeft:'20px'}}><strong>Registrados:</strong> {event.registered}</p>
       
        <RegistrationForm event={event} onRegister={handleRegistration} />
      </div></>
    );
  };

export default EventDetails;
