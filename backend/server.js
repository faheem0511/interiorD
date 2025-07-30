import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import designRoutes from './routes/design.routes.js';
import loginRoutes from './routes/login.routes.js';
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/design', designRoutes);

// Importing the login routes

app.use('/api', loginRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
