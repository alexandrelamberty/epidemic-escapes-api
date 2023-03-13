const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * Constructeur du Modele Genre
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          //isAlpha : true,
          notNull: true,
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          //isAlpha : true,
          notNull: true,
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "UK_User_Email",
        validate: {
          isEmail: true,
          notNull: true,
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          notNull: true,
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "User",
        validate: {
          notNull: true,
          notEmpty: true,
          isIn: [["User", "Admin"]],
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      tableName: "User",
    }
  );

  // https://sequelize.org/docs/v6/other-topics/hooks/
  User.beforeCreate(async (user) => {
    console.log("UserModel::beforeCreate ", user);
    // const salt = await bcrypt.genSaltSync(11, "a");
    // const hashedPassword = await argon2.hash(user.password);
    // const hashedPassword = bcrypt.hashSync(user.password, salt);
    // user.password = hashedPassword;
  });

  return User;
};
