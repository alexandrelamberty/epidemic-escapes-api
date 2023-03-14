const { Sequelize } = require("sequelize");

const { DB_SERVER, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_SERVER,
  dialect: "mysql",
});

const db = {};
db.sequelize = sequelize;

// Models
db.Book = require("./book.model")(sequelize);
db.Genre = require("./genre.model")(sequelize);
db.Publisher = require("./publisher.model")(sequelize);
db.Author = require("./author.model")(sequelize);
db.Order = require("./order.model")(sequelize);
db.MM_Order_Book = require("./mm_order_book.model")(sequelize);
db.User = require("./user.model")(sequelize);

// Relations

// Genre
db.Genre.hasMany(db.Book);

// Publisher
db.Publisher.hasMany(db.Book);

// Book
db.Book.belongsTo(db.Genre);
db.Book.belongsTo(db.Publisher);
db.Book.belongsToMany(db.Author, { through: "MM_Book_Author" });
db.Book.belongsToMany(
  db.Order,
  { through: db.MM_Order_Book },
  { foreignKey: "BookId" }
);

// Author
db.Author.belongsToMany(db.Book, { through: "MM_Book_Author" });

// Order
db.Order.belongsToMany(
  db.Book,
  { through: db.MM_Order_Book },
  { foreignKey: "OrderId" }
);
db.Order.belongsTo(db.User);

// User
db.User.hasMany(db.Order);

// Testing

db.Book.hasMany(db.MM_Order_Book);
db.MM_Order_Book.belongsTo(db.Book);
db.Order.hasMany(db.MM_Order_Book);
db.MM_Order_Book.belongsTo(db.Order);

module.exports = db;
