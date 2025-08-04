console.log('Cargando rutas de capitulos');

const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM capitulos`);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener capítulos' });
  }
});

module.exports = router;
