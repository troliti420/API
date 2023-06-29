const Starship = require("../Models/Starships.js");

const getStarships = async (req, res) => {
  try {
    const starships = await Starship.find();

    res.json(starships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStarshipById = async (req, res) => {
  try {
    const starship = await Starship.findById(req.params.id);

    if (!starship) return res.status(404).json({ error: 'Starship not found' });

    res.json(starship);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createStarship = async (req, res) => {
    console.log
  try {
    let newId = req.body._id || 1;

    if(!req.body._id) {
      const highestIdDocument = await Starship.findOne().sort({ _id: -1 }).limit(1);
      if (highestIdDocument) newId = highestIdDocument._id + 1;
    }

    const starship = await Starship.create({ _id : newId, ...req.body });

    res.status(201).json(starship);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteStarship = async (req, res) => {
  try {
    const starship = await Starship.findOneAndDelete({ _id: req.params.id });

    if (!starship) return res.status(404).json({ error: 'Starship not found' });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStarship = async (req, res) => {
  try {
    const starship = await Starship.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true });

    if (!starship) return res.status(404).json({ error: 'Starship not found' });

    const updatedAttributes = {};
    for (const [key] of Object.entries(req.body)) {
      if (starship[key] !== undefined) {
        updatedAttributes[key] = starship[key];
      }
    }

    res.status(200).json(updatedAttributes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getStarships,
  getStarshipById,
  createStarship,
  deleteStarship,
  updateStarship,
};


const express = require("express");
const router = express.Router();

router.get("/", getStarships);
router.get("/:id", getStarshipById);
router.post("/", createStarship);
router.delete("/:id", deleteStarship);
router.patch("/:id", updateStarship);

module.exports = router;