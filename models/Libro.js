const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  categoria: { type: String, required: true },
  disponible: { type: Boolean, default: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Libro', LibroSchema);
