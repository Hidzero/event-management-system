import React, { useState } from 'react';
import { createEvent, updateEvent } from '../services/eventService';

const EventForm = ({ event, onSave }) => {
  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [date, setDate] = useState(event?.date || '');
  const [location, setLocation] = useState(event?.location || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = { title, description, date, location };
    try {
      if (event) {
        await updateEvent(event._id, eventData);
      } else {
        await createEvent(eventData);
      }
      onSave();
    } catch (error) {
      console.error('Error saving event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EventForm;
