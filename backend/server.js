import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import designRoutes from './routes/design.routes.js';
import loginRoutes from './routes/login.routes.js';
import SignupRoutes from './routes/signup.routes.js';
import portfolioRoutes from "./routes/portfolio.routes.js";
import adminRoutes from "./routes/admin.routes.js"
import path from "path";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/design', designRoutes);
app.use('/api', loginRoutes);
app.use('/api', SignupRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "public/uploads"))); 
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/admin",adminRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error(err));
