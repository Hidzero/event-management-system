import React, { useState, useEffect } from 'react';
import { getEvents } from '../services/eventService';
import EventForm from '../components/EventForm';

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData);
    };
    fetchEvents();
  }, []);

  const handleEventSave = () => {
    setSelectedEvent(null);
    getEvents().then((eventsData) => setEvents(eventsData));
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={() => setSelectedEvent({})}>Create Event</button>
      {selectedEvent && <EventForm event={selectedEvent} onSave={handleEventSave} />}
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.title}
            <button onClick={() => setSelectedEvent(event)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
