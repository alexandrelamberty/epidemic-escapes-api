const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Author
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const Author = sequelize.define(
    "Author",
    {
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 100],
        },
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
          notEmpty: true,
          len: [1, 50],
        },
      },
    },
    {
      tableName: "Author",
      timestamps: false,
    }
  );

  return Author;
};
