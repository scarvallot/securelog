const sequelize = require("../config/database");
const User = require("./User");

// El modelo de Auditoría y sus relaciones (User.hasMany...) se agregarán aquí después

module.exports = {
  sequelize,
  User,
};
