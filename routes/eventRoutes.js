const express = require('express');
const {
  createEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/eventController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, admin, createEvent).get(protect, getEvents);
router.route('/:id').get(protect, getEvent).put(protect, admin, updateEvent).delete(protect, admin, deleteEvent);

module.exports = router;
