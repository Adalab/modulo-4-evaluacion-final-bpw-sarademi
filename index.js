console.log('Arrancando servidor...');

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const frasesRoutes = require('./routes/frases');
const personajesRoutes = require('./routes/personajes');
const capitulosRoutes = require('./routes/capitulos');

app.use('/frases', frasesRoutes);
app.use('/personajes', personajesRoutes);
app.use('/capitulos', capitulosRoutes);

app.get('/', (req, res) => {
res.send('¡API de Los Simpsons funcionando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



