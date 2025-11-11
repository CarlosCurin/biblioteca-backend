const express = require('express');
const router = express.Router();
const Prestamo = require('../models/Prestamo');
const Libro = require('../models/Libro');

// Crear préstamo
router.post('/', async (req, res) => {
  try {
    const nuevoPrestamo = new Prestamo(req.body);
    await nuevoPrestamo.save();

    // Cambiar disponibilidad del libro
    await Libro.findByIdAndUpdate(req.body.libro, { disponible: false });

    res.status(201).json(nuevoPrestamo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar préstamos
router.get('/', async (req, res) => {
  try {
    const prestamos = await Prestamo.find()
      .populate('usuario', 'nombre email')
      .populate('libro', 'titulo autor');
    res.json(prestamos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Marcar como devuelto
router.put('/:id/devolver', async (req, res) => {
  try {
    const prestamo = await Prestamo.findByIdAndUpdate(req.params.id, { devuelto: true, fechaDevolucion: Date.now() }, { new: true });

    // Volver a marcar el libro como disponible
    await Libro.findByIdAndUpdate(prestamo.libro, { disponible: true });

    res.json(prestamo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
