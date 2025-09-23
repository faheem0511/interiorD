import express from "express";
import bcrypt from "bcrypt";
import UserModel from "../model/user.model.js"; // adjust path if needed

const router = express.Router();

// @route   POST /api/signup
// @desc    Register a new user
// @access  Public
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ✅ Basic validations
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
    }

    // ✅ Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Save user
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

export default router;
