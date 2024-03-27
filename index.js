import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';
import adRoutes from './routes/ad.js';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

console.log(process.env.DATABASE, 'DB connect');

const DATABASE = process.env.DATABASE;
const PORT = process.env.PORT || 8081;

//db
mongoose.set('strictQuery', false);
mongoose
  .connect(DATABASE)
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('error'));

//middlewares
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));
app.use(cors());

//routes middleware
app.use('/api', authRoutes);
app.use('/api', adRoutes);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
