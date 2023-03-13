const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Book
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */
module.exports = (sequelize) => {
  const Book = sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      cover: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      tableName: "Book",
      timestamps: true,
    }
  );

  return Book;
};
