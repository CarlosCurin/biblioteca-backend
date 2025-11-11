const mongoose = require('mongoose');

const PrestamoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  libro: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro', required: true },
  fechaPrestamo: { type: Date, default: Date.now },
  fechaDevolucion: { type: Date },
  devuelto: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Prestamo', PrestamoSchema);
