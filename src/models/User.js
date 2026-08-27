const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "Usuario",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validación nativa de formato de correo
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        len: [6, 255], // Longitud mínima de 6 caracteres
      },
    },
  },
  {
    tableName: "Users",
    timestamps: true,
    underscored: true,
    charset: "utf8",
    comments: "Tabla de usuarios para la aplicación SecureLog",
    hooks: {
      // Encriptar la contraseña antes de guardarla en la base de datos
      beforeCreate: async (user) => {
        if (user.contrasena) {
          const salt = await bcrypt.genSalt(10);
          user.contrasena = await bcrypt.hash(user.contrasena, salt);
        }
      },
    },
  },
);

// Método de instancia para facilitar la validación en el Login
User.prototype.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.contrasena);
};

module.exports = User;
