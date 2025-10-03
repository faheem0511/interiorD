// controllers/adminController.js
import Portfolio from "../model/portfolio.model.js";

// Get all portfolio images
export const getPortfolioImages = async (req, res) => {
  try {
    const images = await Portfolio.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add new portfolio image
export const addPortfolioImage = async (req, res) => {
  try {
    const newImage = new Portfolio(req.body);
    await newImage.save();
    res.json(newImage);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update image
export const updatePortfolioImage = async (req, res) => {
  try {
    const updated = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete image
export const deletePortfolioImage = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: "Image deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
