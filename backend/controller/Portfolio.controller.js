import Portfolio from "../model/portfolio.model.js";
import path from "path";
import fs from "fs";

// Fetch all portfolio items
export const getPortfolioItems = async (req, res) => {
  try {
    const items = await Portfolio.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new portfolio item
export const addPortfolioItem = async (req, res) => {
  try {
    const { title, category } = req.body;
    const image = `/uploads/${req.file.filename}`;
    const newItem = await Portfolio.create({ title, category, image });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update portfolio item
export const updatePortfolioItem = async (req, res) => {
  try {
    const { id, title, category } = req.body;
    const updateData = { title, category };
    if (req.file) updateData.image = `/uploads/${req.file.filename}`;

    const updated = await Portfolio.findByIdAndUpdate(id, updateData, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete portfolio item
export const deletePortfolioItem = async (req, res) => {
  try {
    const { id } = req.body;
    const item = await Portfolio.findById(id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    // Delete image file from server
    const filePath = path.join(process.cwd(), "public", item.image);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await Portfolio.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

