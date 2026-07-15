const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  problems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
  }],
  durationMinutes: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['in-progress', 'completed', 'timed-out'],
    default: 'in-progress',
  },
  results: [{
    problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
    submission: { type: mongoose.Schema.Types.ObjectId, ref: 'Submission' },
    verdict: { type: String },
  }],
}, { timestamps: true });

module.exports = mongoose.model('Test', testSchema);