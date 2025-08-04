console.log('Cargando rutas de personajes');
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM personajes`);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener personajes' });
  }
});

module.exports = router;
