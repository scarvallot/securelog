const { Sequelize } = require("sequelize");

// Carga las variables de conexión definidas en el archivo .env.
require("dotenv").config();

// Crea la instancia de Sequelize para conectarse a la base de datos MySQL.
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // Parámetros de conexión configurables mediante variables de entorno.
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT || 3000,
  },
);

// Exporta la conexión para reutilizarla en modelos y servicios.
module.exports = sequelize;
