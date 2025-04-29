import React, { useEffect, useState } from 'react';

const EventListing = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>Event Listing</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventListing;