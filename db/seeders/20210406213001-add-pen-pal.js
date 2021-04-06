'use strict';

const {
  followData
} = require('../../seed-data');


module.exports = {
  up: (queryInterface, Sequelize) => {
    const startingFollows = followData;
    return queryInterface.bulkInsert('PenPals', startingFollows, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PenPals', null, {});
  }
};
