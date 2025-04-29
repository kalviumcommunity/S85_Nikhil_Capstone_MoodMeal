const express = require('express');
const app = express();
const PORT = 5000;

const foodRoutes = require('./routes/foods');
app.use('/api', foodRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
