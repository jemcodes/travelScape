'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    imageSrc: {
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    }
  }, {});
  Article.associate = function (models) {
    // associations can be defined here
    Article.belongsTo(models.User, { foreignKey: "userId" })
    Article.hasMany(models.Comment, { foreignKey: "articleId", onDelete: "CASCADE" })
    Article.hasMany(models.Stamp, { foreignKey: "articleId", onDelete: "CASCADE" })
  };
  return Article;
};