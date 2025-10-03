import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ success: false, message: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ success: false, message: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    console.error("Protect middleware error:", err.message);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// Only allow admin
export const adminOnly = (req, res, next) => {
  if (!req.user) return res.status(401).json({ success: false, message: "Unauthorized" });
  if (req.user.role !== "admin") return res.status(403).json({ success: false, message: "Admins only" });
  next();
};
