'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pen_name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPW: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Article, { foreignKey: "userId" })
    User.hasMany(models.Comment, { foreignKey: "userId" })
    User.hasMany(models.Stamp, { foreignKey: "userId" })
    
    User.hasMany(models.PenPal, { foreignKey: "followerId" })
    User.hasMany(models.PenPal, { foreignKey: "followingId" })
  };
  return User;
};