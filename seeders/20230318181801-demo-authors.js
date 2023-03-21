"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Author", [
      {
        firstName: "Carl Gustave",
        lastName: "Jung",
      },
      {
        firstName: "Aleksandr",
        lastName: "Solzhenitsyn",
      },
      {
        firstName: "Friedrich",
        lastName: "Nietzsche",
      },
      {
        firstName: "Sigmund",
        lastName: "Freud",
      },
      {
        firstName: "Fyodor",
        lastName: "Dostoyevsky",
      },
      {
        firstName: "Leo",
        lastName: "Tolstoy",
      },
      {
        firstName: "Ernest",
        lastName: "Hemingway",
      },
      {
        firstName: "Frans",
        lastName: "de Wall",
      },
      {
        firstName: "Robert",
        lastName: "Sapolsky",
      },
      {
        firstName: "Yuval Noah",
        lastName: "Harari",
      },
      {
        firstName: "Jordan B.",
        lastName: "Peterson",
      },
      {
        firstName: "Michio",
        lastName: "Kaku",
      },
      {
        firstName: "Leonard",
        lastName: "Susskind",
      },
      {
        firstName: "Alan",
        lastName: "Guth",
      },
      {
        firstName: "George",
        lastName: "Orwell",
      },
      {
        firstName: "Aldous Leonard",
        lastName: "Huxley",
      },
      {
        firstName: "Herbert George",
        lastName: "Wells",
      },
      {
        firstName: "Jules",
        lastName: "Verne",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Author", null, {});
  },
};
