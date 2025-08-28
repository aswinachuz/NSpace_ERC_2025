const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdBy: { type: String, required: true }, // user ID or email placeholder
  data: { type: mongoose.Schema.Types.Mixed, required: true }, // parsed CSV/Excel data stored as JSON
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  collaborators: { type: [String], default: [] }, // array of user IDs or emails
});

module.exports = mongoose.model('Project', ProjectSchema);
