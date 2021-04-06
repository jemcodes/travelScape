'use strict';

const {
  articlesData
} = require('../../seed-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const startingArticles = articlesData;

    return queryInterface.bulkInsert('Articles', startingArticles, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
