const Specie = require("../Models/Species.js");

const getSpecies = async (req, res) => {
  try {
    const species = await Specie.find();

    res.json(species);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSpecieById = async (req, res) => {
  try {
    const specie = await Specie.findById(req.params.id);

    if (!specie) return res.status(404).json({ error: 'Specie not found' });

    res.json(specie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createSpecie = async (req, res) => {
    console.log
  try {
    let newId = req.body._id || 1;

    if(!req.body._id) {
      const highestIdDocument = await Specie.findOne().sort({ _id: -1 }).limit(1);
      if (highestIdDocument) newId = highestIdDocument._id + 1;
    }

    const specie = await Specie.create({ _id : newId, ...req.body });

    res.status(201).json(specie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteSpecie = async (req, res) => {
  try {
    const specie = await Specie.findOneAndDelete({ _id: req.params.id });

    if (!specie) return res.status(404).json({ error: 'Specie not found' });

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateSpecie = async (req, res) => {
  try {
    const specie = await Specie.findByIdAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true });

    if (!specie) return res.status(404).json({ error: 'Specie not found' });

    const updatedAttributes = {};
    for (const [key] of Object.entries(req.body)) {
      if (specie[key] !== undefined) {
        updatedAttributes[key] = specie[key];
      }
    }

    res.status(200).json(updatedAttributes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getSpecies,
  getSpecieById,
  createSpecie,
  deleteSpecie,
  updateSpecie,
};


const express = require("express");
const router = express.Router();

router.get("/", getSpecies);
router.get("/:id", getSpecieById);
router.post("/", createSpecie);
router.delete("/:id", deleteSpecie);
router.patch("/:id", updateSpecie);

module.exports = router;