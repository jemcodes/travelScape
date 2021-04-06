'use strict';
module.exports = (sequelize, DataTypes) => {
  const PenPal = sequelize.define('PenPal', {
    followerId: DataTypes.INTEGER,
    followingId: DataTypes.INTEGER
  }, {});
  PenPal.associate = function (models) {
    // associations can be defined here
    PenPal.belongsTo(models.User, { foreignKey: "followerId" })
    PenPal.belongsTo(models.User, { foreignKey: "followingId" })
  };
  return PenPal;
};