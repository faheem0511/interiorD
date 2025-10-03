import express from "express";
import User from "../model/user.model.js";
import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router = express.Router();

// GET all users
router.get("/users", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // exclude password
    res.json({ success: true, users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// DELETE a user
router.delete("/user/:id", protect, adminOnly, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    await user.deleteOne()
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
