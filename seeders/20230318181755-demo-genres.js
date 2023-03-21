"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Genre", [
      {
        name: "Fantasy",
      },
      {
        name: "Psychology",
      },
      {
        name: "Biology",
      },
      {
        name: "Physics",
      },
      {
        name: "Science Fiction",
      },
      {
        name: "Novel",
      },
      {
        name: "Fiction",
      },
      {
        name: "Horror",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Genre", null, {});
  },
};
