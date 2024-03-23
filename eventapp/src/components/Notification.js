import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/upcoming-events')
      .then(response => response.json())
      .then(data => setUpcomingEvents(data))
      .catch(error => console.error('Error fetching upcoming events:', error));
  }, []);

  return (
    <div className="notifications-container">
      
      <ul>
        {upcomingEvents.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
