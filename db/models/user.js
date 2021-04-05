'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pen_name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPW: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};