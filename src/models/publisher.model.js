const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Publisher
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const Publisher = sequelize.define(
    "Publisher",
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 100],
        },
      },
    },
    {
      tableName: "Publisher",
    }
  );

  return Publisher;
};
