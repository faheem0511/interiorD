import Design from "../model/design.model.js";

export const createDesign = async (req, res) => {
  const aiOutput = {
    message: "AI-generated layout based on style: " + req.body.style
  };

  const newDesign = new Design({ ...req.body, aiOutput });
  const saved = await newDesign.save();
  res.json(saved);
};

export const getDesignById = async (req, res) => {
  const design = await Design.findById(req.params.id);
  if (!design) return res.status(404).send("Not found");
  res.json(design);
};
