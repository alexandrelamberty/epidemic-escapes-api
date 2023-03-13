const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Constructeur du Modele MM_Artist_Track
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const MM_Order_Book = sequelize.define(
    "MM_Order_Book",
    {
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
