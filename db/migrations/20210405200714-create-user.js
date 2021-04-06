'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pen_name: {
        allowNull: false,
        type: Sequelize.STRING(20),
        unique: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      bio: {
        type: Sequelize.TEXT
      },
      profile_pic: {
        type: Sequelize.TEXT
      },
      hashedPW: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};