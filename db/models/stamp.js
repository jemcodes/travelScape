'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stamp = sequelize.define('Stamp', {
    articleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Stamp.associate = function (models) {
    // associations can be defined here
    Stamp.belongsTo(models.Article, { foreignKey: "articleId" })
    Stamp.belongsTo(models.User, { foreignKey: "userId" })
  };
  return Stamp;
};