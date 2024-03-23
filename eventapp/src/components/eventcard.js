import React from 'react';
import './eventcard.css';
const EventCard = ({ event, onDetailsClick }) => {
  return (
    <div className='card'>
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>{event.body}</p>
      <button className='button type 1'onClick={() => onDetailsClick(event)}><span className='btn-txt'>Detalles</span></button>
    </div>
    </div>
  );
};

export default EventCard;
