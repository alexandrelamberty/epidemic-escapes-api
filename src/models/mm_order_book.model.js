const { Sequelize, ModelStatic, DataTypes } = require("sequelize");
const db = require(".");

/**
 * Constructeur du Modele MM_Artist_Track
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

// https://sequelize.org/docs/v6/core-concepts/assocs/#many-to-many-relationships
module.exports = (sequelize) => {
  const MM_Order_Book = sequelize.define(
    "MM_Order_Book",
    {
      OrderId: {
        type: DataTypes.INTEGER,
        references: {
          model: db.Order, // 'Orders' would also work
          key: "id",
        },
      },
      BookId: {
        type: DataTypes.INTEGER,
        references: {
          model: db.Book, // 'Books' would also work
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

  return "MM_Order_Book";
};
