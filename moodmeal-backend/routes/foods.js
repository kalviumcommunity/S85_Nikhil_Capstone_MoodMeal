const express = require('express');
const router = express.Router();

let foods = [
  { id: 1, name: 'Pizza', mood: 'happy' },
  { id: 2, name: 'Burger', mood: 'lazy' },
  { id: 3, name: 'Ice Cream', mood: 'sad' }
];

// GET endpoint
router.get('/foods', (req, res) => {
  res.json(foods);
});

// POST endpoint
router.post('/foods', (req, res) => {
  const newFood = {
    id: foods.length + 1,
    name: req.body.name,
    mood: req.body.mood
  };
  foods.push(newFood);
  res.status(201).json(newFood);
});

// PUT endpoint (Update food by ID)
router.put('/foods/:id', (req, res) => {
  const foodId = parseInt(req.params.id);
  const { name, mood } = req.body;

  const food = foods.find(f => f.id === foodId);
  if (!food) return res.status(404).json({ message: 'Food not found' });

  if (name) food.name = name;
  if (mood) food.mood = mood;

  res.json(food);
});

module.exports = router;
