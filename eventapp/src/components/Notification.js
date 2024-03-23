import React, { useState, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import './Notification.css';

const Notifications = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/upcoming-events')
      .then(response => response.json())
      .then(data => setUpcomingEvents(data))
      .catch(error => console.error('Error fetching upcoming events:', error));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="notifications-container">
      <div className="notification-icon" onClick={toggleMenu}>
        <FaBell />
      </div>
      {isMenuOpen && (
        <div className="notifications-menu">
          <h3>Próximos Eventos</h3>
          {upcomingEvents.map(event => (
            <div className="notification-card" key={event.id}>
              <strong>{event.title}</strong> - {event.date}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;

