const { Sequelize, ModelStatic, DataTypes } = require("sequelize");
const db = require(".");

/**
 * MM_Order_Book
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

// https://sequelize.org/docs/v6/core-concepts/assocs/#many-to-many-relationships
// https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/#the-best-of-both-worlds-the-super-many-to-many-relationship
module.exports = (sequelize) => {
  const MM_Order_Book = sequelize.define(
    "MM_Order_Book",
    {
      OrderId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Order", // 'Orders' would also work
          key: "id",
        },
      },
      BookId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Book", // 'Books' would also work
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          notNull: true,
        },
      },
    },
    {
      tableName: "MM_Order_Book",
    }
  );

  return MM_Order_Book;
};
