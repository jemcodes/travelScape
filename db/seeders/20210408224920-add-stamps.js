'use strict';

const {
  stampsData
} = require('../../seed-data');


module.exports = {
  up: (queryInterface, Sequelize) => {
    const startingStamps = stampsData
    return queryInterface.bulkInsert('Stamps', startingStamps, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stamps', null, {});
  }
};
