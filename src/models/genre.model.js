const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Genre
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const Genre = sequelize.define(
    "Genre",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: "UK_Genre_Name",
        validate: {
          len: [1, 50],
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      tableName: "Genre",
      timestamps: false,
    }
  );

  return Genre;
};
