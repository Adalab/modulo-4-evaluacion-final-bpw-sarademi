Este proyecto utiliza una base de datos MySQL llamada simpsons. El esquema completo, incluyendo las tablas y relaciones, está definido en el archivo esquema.sql que encontrarás en la raíz del repositorio.
Para su correcta instalación:
Clona el repositorio
Instala dependencias
Crea un archivo .env con:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=simpsons
PORT=3000

Ejemplo para base de datos remota en Aiven:

DB_HOST=mysql-29f92c18-saralepuz-45d1.f.aivencloud.com
DB_USER=avnadmin
DB_PASSWORD=tu_contraseña_aquí (no incluida por seguridad)
DB_NAME=defaultdb
PORT=20755

Carga la base de datos con esquema.sql.

API disponible en:
https://modulo-4-evaluacion-final-bpw-sarademi.onrender.com
Importante: Actualmente, los endpoints relacionados con /frases, /personajes y /capitulos pueden devolver errores debido a problemas de conexión con la base de datos remota en Aiven.
