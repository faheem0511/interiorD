import express from "express";
import multer from "multer";
import path from "path";
import {
  getPortfolioItems,
  addPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
} from "../controller/Portfolio.controller.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Public: get portfolio
router.get("/", getPortfolioItems);
router.post("/", upload.single("image"), addPortfolioItem);
router.put("/", upload.single("image"), updatePortfolioItem);
router.delete("/", deletePortfolioItem);

export default router;
