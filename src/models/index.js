const sequelize = require("../config/database");
const User = require("./User");
const Audit = require("./Audit");

// --- Definición de Relaciones ---

// 1. Un Usuario tiene muchos registros de Auditoría
User.hasMany(Audit, {
  foreignKey: "user_id", // Nombre explícito de la llave foránea
  as: "audits", // Alias para hacer consultas con 'include' más adelante
});

// 2. Un registro de Auditoría pertenece a un Usuario
Audit.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Exportamos la conexión y los modelos
module.exports = {
  sequelize,
  User,
  Audit,
};
