require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/database"); // Importar configuración de BD
const routes = require("./src/routes/index"); //  Importar el enrutador base

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares básicos para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registrar el enrutador en la aplicación
app.use("/", routes);

/**
 * Verifica la conexión con MySQL, sincroniza los modelos y, si todo funciona,
 * inicia el servidor HTTP.
 */
async function iniciarServidor() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos MySQL establecida con éxito.");

    // Sincroniza los modelos y crea las tablas que aún no existan.
    await sequelize.sync({ alter: true });
    console.log("Modelos sincronizados correctamente.");

    // Inicia el servidor en el puerto configurado o en el puerto 3000.
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    // No inicia el servidor si la conexión o la sincronización fallan.
    console.error(
      "Error crítico: No se pudo conectar a la base de datos.",
      error,
    );
  }
}

iniciarServidor();
