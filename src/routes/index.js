const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

// Definir la ruta raíz y asignarle el método del controlador
router.get("/", homeController.index);

// Aquí iremos agregando el resto de rutas (authRoutes, dashboardRoutes) más adelante
// router.use('/api', otherRoutes);

module.exports = router;
