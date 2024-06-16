const express = require('express');
const { registerParticipant, getParticipants } = require('../controllers/participantController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/:eventId').post(protect, registerParticipant).get(protect, getParticipants);

module.exports = router;
