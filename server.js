const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
require('./models/Libro');
require('./models/Usuario');
require('./models/Prestamo');

const app = express();
app.use(cors());
app.use(express.json());

// RUTA DE PRUEBA
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando ✅');
});

// CONEXIÓN A MONGODB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

const PORT = process.env.PORT || 3000;
app.use('/api/libros', require('./routes/libros'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/prestamos', require('./routes/prestamos'));
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
