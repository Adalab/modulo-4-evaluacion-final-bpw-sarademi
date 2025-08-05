const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM capitulos');
    res.json(rows);
  } catch (error) {
    console.error('ERROR en GET /capitulos:', error);
    res.status(500).json({ error: 'Error al obtener capítulos' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM capitulos WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Capítulo no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('ERROR en GET /capitulos/:id:', error);
    res.status(500).json({ error: 'Error al obtener el capítulo' });
  }
});

router.get('/:capitulo_id/frases', async (req, res) => {
  const { capitulo_id } = req.params;
  try {
    const [rows] = await pool.query(
      'SELECT * FROM frases WHERE capitulo_id = ?',
      [capitulo_id]
    );
    res.json(rows);
  } catch (error) {
    console.error('ERROR en GET /capitulos/:capitulo_id/frases:', error);
    res.status(500).json({ error: 'Error al obtener frases del capítulo' });
  }
});

module.exports = router;
