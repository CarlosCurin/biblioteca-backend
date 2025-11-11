📚 Sistema Biblioteca - Backend

Este es el backend del proyecto Sistema Biblioteca, desarrollado en Node.js + Express + MongoDB (Mongoose).
Provee una API REST que gestiona libros, usuarios y préstamos, conectándose con MongoDB Atlas.

🚀 Tecnologías utilizadas

Node.js (v20+)

Express.js

MongoDB Atlas

Mongoose

CORS

Dotenv

🧩 Estructura de carpetas
backend/
├── models/             # Esquemas de datos (Libro, Usuario, Préstamo)
├── routes/             # Rutas API (libros, usuarios, préstamos)
├── server.js           # Archivo principal del servidor
├── .env.example        # Variables de entorno de ejemplo
├── package.json        # Dependencias del proyecto
└── README.md           # Documentación del backend

⚙️ Configuración del entorno

1️⃣ Crea un archivo .env en la raíz de backend/ (basado en .env.example):

PORT=3000
MONGO_URI=mongodb+srv://TU_USUARIO:TU_PASSWORD@cluster.mongodb.net/biblioteca


2️⃣ Instala las dependencias:

npm install


3️⃣ Inicia el servidor:

node server.js

📡 Endpoints principales
Método	Endpoint	Descripción
GET	/api/libros	Obtener todos los libros
POST	/api/libros	Crear un libro
PUT	/api/libros/:id	Actualizar un libro
DELETE	/api/libros/:id	Eliminar un libro
GET	/api/usuarios	Listar usuarios
GET	/api/prestamos	Listar préstamos
🧠 Notas para desarrollo

No subas tu archivo .env real.

Usa .env.example para compartir la estructura.

Para producción, puedes usar pm2 o docker si lo necesitas.

🧑‍💻 Autor

Carlos Curin
Proyecto académico — Sistema Biblioteca (Backend)
📅 Año: 2025
