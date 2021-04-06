'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pen_name: {
      allowNull: false,
      type: DataTypes.STRING(20),
      unique: true
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true
    },
    bio: {
      type: DataTypes.TEXT
    },
    profile_pic: {
      type: DataTypes.TEXT
    },
    hashedPW: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Article, { foreignKey: "userId" })
    User.hasMany(models.Comment, { foreignKey: "userId" })
    User.hasMany(models.Stamp, { foreignKey: "userId" })

    const columnMappingOne = { // User -> User, through Follow as follower
      through: 'PenPals',
      otherKey: 'followingId',
      foreignKey: 'followerId',
      as: 'followings'
    }
    const columnMappingTwo = { // User -> User, through Follow as following
      through: 'PenPals',
      otherKey: 'followerId',
      foreignKey: 'followingId',
      as: 'followers'
    }

    User.belongsToMany(models.User, columnMappingOne);
    User.belongsToMany(models.User, columnMappingTwo);
  };
  return User;
};