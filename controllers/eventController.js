const Event = require('../models/Event');

const createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  const event = new Event({
    title,
    description,
    date,
    location,
    organizer: req.user._id
  });
  await event.save();
  res.status(201).json(event);
};

const getEvents = async (req, res) => {
  const events = await Event.find().populate('organizer', 'username email');
  res.json(events);
};

const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id).populate('organizer', 'username email');
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
};

const updateEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  const event = await Event.findById(req.params.id);
  if (event) {
    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.location = location || event.location;
    await event.save();
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
};

const deleteEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    await event.remove();
    res.json({ message: 'Event removed' });
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
};

module.exports = { createEvent, getEvents, getEvent, updateEvent, deleteEvent };
