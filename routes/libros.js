const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro');

// Crear libro
router.post('/', async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    await nuevoLibro.save();
    res.status(201).json(nuevoLibro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todos los libros
router.get('/', async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener libro por ID
router.get('/:id', async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
    res.json(libro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Actualizar libro
router.put('/:id', async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(libro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar libro
router.delete('/:id', async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Libro eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

