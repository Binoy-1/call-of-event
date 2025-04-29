const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get All Events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
});

// Add an Event
router.post('/', async (req, res) => {
  const { title, date, location, description } = req.body;
  try {
    const newEvent = new Event({ title, date, location, description });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: 'Error creating event', error });
  }
});

module.exports = router;