const express = require('express');
const router = express.Router();
const pool = require('../db');


router.post('/', async (req, res) => {
 const { texto, marca_tiempo, descripcion, personaje_id, capitulo_id } = req.body;
 try {
 const [result] = await pool.query(
 `INSERT INTO frases (texto, marca_tiempo, descripcion, personaje_id, capitulo_id)
VALUES (?, ?, ?, ?, ?)`,
[texto, marca_tiempo, descripcion, personaje_id, capitulo_id]
);
res.status(201).json({ id: result.insertId });
} catch (error) {
res.status(500).json({ error: 'Error al insertar la frase' });
}
});

router.get('/', async (req, res) => {
try {
const [rows] = await pool.query(
`SELECT f.id, f.texto, f.marca_tiempo, f.descripcion,
p.nombre AS nombre_personaje, p.apellido AS apellido_personaje,
c.titulo AS titulo_capitulo
FROM frases f
LEFT JOIN personajes p ON f.personaje_id = p.id
LEFT JOIN capitulos c ON f.capitulo_id = c.id`
 );
res.json(rows);
} catch (error) {
res.status(500).json({ error: 'Error al obtener frases' });
}
});

router.get('/:id', async (req, res) => {
const { id } = req.params;
try {
const [rows] = await pool.query(
`SELECT f.id, f.texto, f.marca_tiempo, f.descripcion,
p.nombre AS nombre_personaje, p.apellido AS apellido_personaje,
c.titulo AS titulo_capitulo
FROM frases f
LEFT JOIN personajes p ON f.personaje_id = p.id
LEFT JOIN capitulos c ON f.capitulo_id = c.id
WHERE f.id = ?`,
[id]
);
if (rows.length === 0) {
return res.status(404).json({ error: 'Frase no encontrada' });
}
res.json(rows[0]);
} catch (error) {
res.status(500).json({ error: 'Error al obtener la frase' });
}
});

router.put('/:id', async (req, res) => {
const { id } = req.params;
const { texto, marca_tiempo, descripcion, personaje_id, capitulo_id } = req.body;
try {
const [result] = await pool.query(
`UPDATE frases SET texto = ?, marca_tiempo = ?, descripcion = ?, personaje_id = ?, capitulo_id = ? WHERE id = ?`,
[texto, marca_tiempo, descripcion, personaje_id, capitulo_id, id]
);
if (result.affectedRows === 0) {
return res.status(404).json({ error: 'Frase no encontrada para actualizar' });
}
res.json({ message: 'Frase actualizada correctamente' });
} catch (error) {
res.status(500).json({ error: 'Error al actualizar la frase' });
}
});

router.delete('/:id', async (req, res) => {
const { id } = req.params;
try {
const [result] = await pool.query(`DELETE FROM frases WHERE id = ?`, [id]);
if (result.affectedRows === 0) {
return res.status(404).json({ error: 'Frase no encontrada para eliminar' });
}
res.json({ message: 'Frase eliminada correctamente' });
} catch (error) {
res.status(500).json({ error: 'Error al eliminar la frase' });
 }
});


module.exports = router;
