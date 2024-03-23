import React, { useState, useEffect } from 'react';
import EventCard from './eventcard';
import EventDetails from './EventDetails';
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:5000/events')
        .then(response => response.json())
        .then(data => setEvents(data))
        .catch(error => console.error('Error fetching events:', error));
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
          <div className="event-list">
            {events.length > 0 ? (
              events.map(event => (
                <EventCard key={event.id} event={event} onDetailsClick={handleDetailsClick} />
              ))
            ) : (
              <p>Cargando eventos...</p>
            )}
          </div>
        )}
      </div>
    );
  };

export default Home;