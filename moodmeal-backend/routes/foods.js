const express = require('express');
const router = express.Router();

const foods = [
  { id: 1, name: 'Pizza', mood: 'happy' },
  { id: 2, name: 'Burger', mood: 'lazy' },
  { id: 3, name: 'Ice Cream', mood: 'sad' }
];

router.get('/foods', (req, res) => {
  res.json(foods);
});

module.exports = router;
