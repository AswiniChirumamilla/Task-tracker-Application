const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
  completedAt: Date,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
});

module.exports = mongoose.model('Task', taskSchema);
