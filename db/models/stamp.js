'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stamp = sequelize.define('Stamp', {
    articleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Articles" }

    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    },
  }, {});
  Stamp.associate = function (models) {
    // associations can be defined here
    Stamp.belongsTo(models.Article, { foreignKey: "articleId" })
    Stamp.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Stamp;
};