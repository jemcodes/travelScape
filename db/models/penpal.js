'use strict';
module.exports = (sequelize, DataTypes) => {
  const PenPal = sequelize.define('PenPal', {
    followerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    },
    followingId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    },
  }, {});
  PenPal.associate = function (models) {
    // associations can be defined here
  };
  return PenPal;
};