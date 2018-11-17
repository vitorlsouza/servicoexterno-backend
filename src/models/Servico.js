const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema({
  department: String,
  title: String,
  body: String,
  author: String,
  priority: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Servico', ServicoSchema);
