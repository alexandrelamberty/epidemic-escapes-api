"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Publisher",
      [
        {
          name: "Abrams Books",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Allen & Unwin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anvil Press Poetry",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barrie & Jenkins",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hachette Books",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Harper",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Harvest House",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Informa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Liberty Fund",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "O'Reilly Media",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Publisher", null, {});
  },
};
