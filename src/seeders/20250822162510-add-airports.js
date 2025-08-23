"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Kempegowda International Airport",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mysure International Airport",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mengaluru International Airport",
          cityId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indira Gandhi International Airport",
          cityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airports", {
      name: [
        "Kempegowda International Airport",
        "Mysure International Airport",
        "Mengaluru International Airport",
        "Indira Gandhi International Airport",
      ],
    });
  },
};
