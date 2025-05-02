const express = require('express');
const Project = require('../models/Project');
const auth = require('../middleware/auth');
const router = express.Router();
router.post('/', auth, async (req, res) => {
  const count = await Project.countDocuments({ userId: req.userId });
  if (count >= 4) return res.status(400).send('Max 4 projects allowed');
  const project = new Project({ name: req.body.name, userId: req.userId });
  await project.save();
  res.status(201).json(project);
});

router.get('/', auth, async (req, res) => {
  const projects = await Project.find({ userId: req.userId });
  res.json(projects);
});

module.exports = router;
