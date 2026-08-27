require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/database"); // Importar configuración de BD

const app = express();
const PORT = process.env.PORT || 3000;

// Probar conexión a MySQL y sincronizar
async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos MySQL establecida con éxito.");

    // Sincroniza los modelos con la BD (creará las tablas si no existen)
    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados correctamente.");

    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(
      "Error crítico: No se pudo conectar a la base de datos.",
      error,
    );
  }
}

iniciarServidor();
