import React, { useState, useEffect } from 'react';
import EventCard from './eventcard';
import EventDetails from './EventDetails';
import Notifications from './Notification'; // Importa el componente de notificaciones
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:5000/events')
        .then(response => response.json())
        .then(data => setEvents(data))
        .catch(error => console.error('Error fetching events:', error));

      fetch('http://localhost:5000/upcoming-events') // Obtén las notificaciones de eventos próximos
        .then(response => response.json())
        .then(data => setNotifications(data))
        .catch(error => console.error('Error fetching upcoming events:', error));
    }, []);
  
    const handleDetailsClick = (event) => {
      setSelectedEvent(event);
    };
  
    const handleCloseDetails = () => {
      setSelectedEvent(null);
    };
  
    return (
      <div className="home-container">
        <h1>Eventos Próximos</h1>
        {selectedEvent ? (
          <EventDetails event={selectedEvent} onClose={handleCloseDetails} />
        ) : (
          <div>
            <Notifications notifications={notifications} /> {/* Renderiza el componente de notificaciones */}
            <div className="event-list">
              {events.length > 0 ? (
                events.map(event => (
                  <EventCard key={event.id} event={event} onDetailsClick={handleDetailsClick} />
                ))
              ) : (
                <p>Cargando eventos...</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

export default Home;
