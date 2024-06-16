const Participant = require('../models/Participant');
const Event = require('../models/Event');

const registerParticipant = async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }
  const participant = new Participant({ user: req.user._id, event: event._id });
  await participant.save();
  res.status(201).json(participant);
};

const getParticipants = async (req, res) => {
  const participants = await Participant.find({ event: req.params.eventId }).populate('user', 'username email');
  res.json(participants);
};

module.exports = { registerParticipant, getParticipants };
