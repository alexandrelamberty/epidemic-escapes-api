const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Address
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const Address = sequelize.define(
    "Address",
    {
      street: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 100],
        },
      },
      streetNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {},
      },
      postalCode: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Address",
      timestamps: false,
    }
  );

  return Address;
};
