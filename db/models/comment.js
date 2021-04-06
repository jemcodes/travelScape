'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    articleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: "userId" })
    Comment.belongsTo(models.Article, { foreignKey: "articleId" })
    
  };
  return Comment;
};