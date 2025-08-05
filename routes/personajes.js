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


router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM personajes WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Personaje no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el personaje' });
    }
});


router.get('/:personaje_id/frases', async (req, res) => {
    const { personaje_id } = req.params;
    try {
        const [rows] = await pool.query(
            'SELECT * FROM frases WHERE personaje_id = ?',
            [personaje_id]
        );
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener frases del personaje' });
    }
});

module.exports = router;


