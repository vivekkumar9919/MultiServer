const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: { type: String, },
  status: { type: String, enum: ['pending', 'completed', 'created'], default: 'created' },
  result: { type: String },
  jobs: { type: [String], default: [] }, 
  finishedJob: { type: [String], default: [] }, 
  errorJobs: { type: [String], default: [] },
  jobType: { type: String},
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
