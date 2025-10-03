import express from "express";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken"; // use * as jwt for v9+
import UserModel from "../model/user.model.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password required" });
    }

    const normalizedEmail = email.toLowerCase().trim();
    const user = await UserModel.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // Ensure secrets exist
    const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in .env");
    }

    // ✅ Use jwt.default.sign for ESM + jsonwebtoken v9+
    const token = jwt.default.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
