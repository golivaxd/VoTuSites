require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Importar cors
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Usar el middleware cors
app.use(express.json());

// Ruta principal opcional
app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

// Usar las rutas de usuarios
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
