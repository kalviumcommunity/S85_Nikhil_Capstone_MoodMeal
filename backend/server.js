import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

// app config
const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());
app.use(cors());

// db config
connectDB();

// api endpoints
app.use('/api/food', foodRouter);

app.get('/', (req, res)=> {
    res.send('API is running');
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
}); 