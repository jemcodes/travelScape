'use strict';

const bcrypt = require('bcryptjs');

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Step 1
    const password = bcrypt.hashSync('Password1!', 10);

    let users = [
      {
        pen_name: 'demouser',
        email: 'demo@gmail.com',
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pen_name: 'euniceparkk',
        email: 'eunice@gmail.com',
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pen_name: 'bilbopicard',
        email: 'jamie@gmail.com',
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pen_name: 'jemcodes',
        email: 'jane@gmail.com',
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pen_name: 'patricknuttree',
        email: 'patrick@gmail.com',
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    // Step 2
    const numNewUsers = 45;

    // Each loop will create a new user

    for (let i = 6; i < numNewUsers; i++) {
      // This will be each new user
      let newUser = {
        pen_name: faker.internet.userName(),
        email: faker.internet.email(),
        // Making the password easy to figure out if I want to log into another user. The number after password will directly correlate to the id of the user
        hashedPW: bcrypt.hashSync(`password${i}`, 10),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      users.push(newUser);
    }
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
