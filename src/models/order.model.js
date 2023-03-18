const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Order
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const Order = sequelize.define(
    "Order",
    {
      subtotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        validate: {
          // FIXME: decimal validation
        },
      },
      validated: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        // FIXME: validate boolean
      },
    },
    {
      tableName: "Order",
    }
  );

  return Order;
};
