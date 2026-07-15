import express from "express";
import multer from "multer";
import { addPortfolio, deletePortfolio, getPortfolio, updatePortfolio } from "../controller/portfolio.controller.js";
import {protect} from "../middleware/auth.middleware.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads",
 filename: (req, file, cb) => {
  const safeName = file.originalname
    .replace(/\s+/g, "_")
    .replace(/[()]/g, "");

  cb(null, Date.now() + "-" + safeName);
},

});
const upload = multer({ storage });

router.get("/", getPortfolio);
router.post("/add", upload.single("image"), addPortfolio);
router.put("/update/:id", protect, upload.single("image"), updatePortfolio);
router.delete("/delete/:id", protect, deletePortfolio);

export default router;
