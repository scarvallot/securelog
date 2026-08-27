const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Audit = sequelize.define(
  "Auditoria",
  {
    audit_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    action: {
      type: DataTypes.ENUM("LOGIN", "LOGOUT", "REGISTRO_ASISTENCIA"),
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    // La llave foránea 'user_id' la inyectará Sequelize automáticamente en el index.js
  },
  {
    tableName: "Audits",
    timestamps: true, // Activamos para tener la fecha de creación
    updatedAt: false, // Desactivamos updated_at por ser una tabla de solo lectura (logs)
    underscored: true,
    charset: "utf8",
    comments: "Tabla de bitácora para registrar acciones de los usuarios",
  },
);

module.exports = Audit;
