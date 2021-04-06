'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
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
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "userId" })
    Comment.belongsTo(models.Article, { foreignKey: "articleId" })

  };
  return Comment;
};