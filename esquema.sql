CREATE DATABASE IF NOT EXISTS simpsons;
USE simpsons;

CREATE TABLE personajes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50),
  ocupacion VARCHAR(100),
  descripcion TEXT
);

CREATE TABLE capitulos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  numero_episodio INT,
  temporada INT,
  fecha_emision DATE,
  sinopsis TEXT
);

CREATE TABLE frases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  texto TEXT NOT NULL,
  marca_tiempo VARCHAR(10),
  descripcion TEXT,
  personaje_id INT,
  capitulo_id INT,
  FOREIGN KEY (personaje_id) REFERENCES personajes(id),
  FOREIGN KEY (capitulo_id) REFERENCES capitulos(id)
);

CREATE TABLE personajes_capitulos (
  personaje_id INT,
  capitulo_id INT,
  PRIMARY KEY (personaje_id, capitulo_id),
  FOREIGN KEY (personaje_id) REFERENCES personajes(id),
  FOREIGN KEY (capitulo_id) REFERENCES capitulos(id)
);


-- Ejemplos

INSERT INTO personajes (nombre, apellido, ocupacion, descripcion)
VALUES 
('Homer', 'Simpson', 'Inspector de seguridad', 'Padre de familia que adora la cerveza y odia el trabajo.'),
('Bart', 'Simpson', 'Estudiante', 'Niño travieso, amante del skate.'),
('Lisa', 'Simpson', 'Estudiante', 'Niña prodigio, saxofonista y defensora de los derechos civiles.'),
('Marge', 'Simpson', 'Ama de casa', 'Madre preocupada por su familia y su cabello azul.');


INSERT INTO capitulos (titulo, numero_episodio, temporada, fecha_emision, sinopsis)
VALUES 
('La odisea de Homer', 1, 1, '1989-12-17', 'Homer intenta salvar la Navidad sin bono navideño.'),
('Bart el genio', 2, 1, '1990-01-14', 'Bart hace trampa en un test de inteligencia.'),
('Moaning Lisa', 6, 1, '1990-02-11', 'Lisa entra en una depresión existencial.');

INSERT INTO frases (texto, marca_tiempo, descripcion, personaje_id, capitulo_id)
VALUES
('D\'oh!', '00:05', 'Expresión típica de frustración de Homer.', 1, 1),
('¡Ay, caramba!', '00:10', 'Frase mítica de Bart cuando se sorprende.', 2, 2),
('Es curioso cómo la música puede hacer que los recuerdos vuelvan', NULL, 'Lisa reflexiona sobre la música y la memoria.', 3, 3),
('A veces una mujer tiene que defenderse por sí misma', NULL, 'Marge reivindicando su fuerza.', 4, 3);

--Relaciones personajes-capítulos

INSERT INTO personajes_capitulos (personaje_id, capitulo_id)
VALUES 
(1, 1), (1, 2), (2, 2), (2, 3), (3, 3), (4, 3);
