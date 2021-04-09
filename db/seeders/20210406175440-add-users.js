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
        bio: "Demo User is the author of the Wall Street Journal bestseller 'Everybody Can Code.' They are an Entrepreneur and a LinkedIn Influencer.",
        profile_pic: "http://www.clker.com/cliparts/b/d/F/4/j/j/female-professional-md.png",
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pen_name: 'euniceparkk',
        email: 'eunice@gmail.com',
        bio: "Hey y'all! I'm Eunice.There's truly nothing I love more than traveling. Being 38,000 feet high on route to my destination is my happy place.",
        profile_pic: "/images/eunice.png",
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pen_name: 'bilbopicard',
        email: 'jamie@gmail.com',
        bio: "I'm Jamie. I like to go new places and try new things. I have a Bachelors in Nursing but am trying to learn how to code but I'm a potato.",
        profile_pic: "/images/jamie.png",
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pen_name: 'jemcodes',
        email: 'jane@gmail.com',
        bio: "Hiya! I'm jane and I live to travel. I'm learning to code and can't wait to take my new skills around the world!",
        profile_pic: "/images/jane.png",
        hashedPW: password,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pen_name: 'patricknuttree',
        email: 'patrick@gmail.com',
        bio: "I am a software engineer in training. I have a background in sales, politics and fundraising. Along with a bachelors in sociology and a masters in public administration.",
        profile_pic: "/images/patrick.png",
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
