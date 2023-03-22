"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Book", [
      {
        title: "Second book",
        description: "Book description",
        ISBN10: "string",
        ISBN13: "string",
        GenreId: 1,
        PublisherId: 1,
        authors: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
      {
        title: "Second book",
        description: "Book description",
        ISBN10: "string",
        ISBN13: "string",
        GenreId: 1,
        PublisherId: 1,
        authors: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
      {
        title: "Second book",
        description: "Book description",
        ISBN10: "string",
        ISBN13: "string",
        GenreId: 1,
        PublisherId: 1,
        authors: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
      {
        title: "Second book",
        description: "Book description",
        ISBN10: "string",
        ISBN13: "string",
        GenreId: 1,
        PublisherId: 1,
        authors: [
          {
            id: 1,
          },
          {
            id: 2,
          },
        ],
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Book", null, {});
  },
};
