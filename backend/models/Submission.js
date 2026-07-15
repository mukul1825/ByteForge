const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    enum: ['python', 'cpp', 'java'],
    required: true,
  },
  verdict: {
    type: String,
    enum: ['Accepted', 'Wrong Answer', 'Time Limit Exceeded', 'Runtime Error', 'Compile Error', 'Pending'],
    default: 'Pending',
  },
  runtimeMs: { type: Number },
  memoryKb: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);