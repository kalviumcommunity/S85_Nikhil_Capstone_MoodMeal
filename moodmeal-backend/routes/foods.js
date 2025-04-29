const express = require('express');
const router = express.Router();

const foods = [
  { id: 1, name: 'Pizza', mood: 'happy' },
  { id: 2, name: 'Burger', mood: 'lazy' },
  { id: 3, name: 'Ice Cream', mood: 'sad' }
];

// GET API
router.get('/foods', (req, res) => {
  res.json(foods);
});

// POST API
router.post('/foods', (req, res) => {
  const { name, mood } = req.body;

  if (!name || !mood) {
    return res.status(400).json({ error: 'Name and mood are required' });
  }

  const newFood = {
    id: foods.length + 1,
    name,
    mood
  };

  foods.push(newFood);
  res.status(201).json({ message: 'Food item added', food: newFood });
});

module.exports = router;
