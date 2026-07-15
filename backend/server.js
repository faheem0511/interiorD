import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import portfolioRoutes from "./routes/portfolio.routes.js";
import path from "path";

dotenv.config();
connectDB();

// app.use(
//   cors({
//     origin: "http://localhost:3000", // frontend URL ONLY
//     credentials: true,               // allow cookies
//   })
// );

const app = express();
app.use(cors());
app.use(express.json());

// --------------------- Health Check --------------------- //
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Interior backend running" });
});

app.use("/api/uploads", (req, res, next) => {
  console.log("Static request:", req.url);
  next();
});

// --------------------- API Routes --------------------- //
app.use("/api/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/auth", authRoutes);
app.use("/api/portfolio", portfolioRoutes);

// --------------------- Error Handler --------------------- //
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

// --------------------- Start Server --------------------- //
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Interior Backend running on http://localhost:${PORT}`)
);
