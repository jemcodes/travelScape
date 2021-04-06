'use strict';

const {
  commentsData
} = require('../../seed-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const startingComments = commentsData;
    return queryInterface.bulkInsert('Comments', startingComments, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
