import express from "express";
import bcrypt from "bcrypt";
import UserModel from "../model/user.model.js";

const router = express.Router();

router.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 🔍 1. Input Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    // 🔍 2. Check Existing User
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // 🔐 3. Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🆕 4. Save User
    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    // 🎉 5. Response (Don’t return the hashed password)
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: user._id,
    });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

export default router;
