const { OrderDTO } = require("../dto/order.dto");
const db = require("../models");

const orderService = {
  getAll: async (offset, limit) => {
    console.log("Get All Orders");
    const { rows, count } = await db.Order.findAndCountAll({
      distinct: true,
      offset,
      limit,
      include: [db.User, db.Book],
    });
    console.log(rows);
    return {
      orders: rows.map((order) => new OrderDTO(order)),
      count,
    };
  },

  getById: async (id) => {
    const order = await db.Order.findByPk(id, {
      include: [db.Book],
    });
    return order ? new OrderDTO(order) : null;
  },

  create: async (userId, orderToAdd) => {
    const transaction = await db.sequelize.transaction();

    try {
      // Create the order
      let order = await db.Order.create({ UserId: userId });

      // Add the books and quantity to the order
      for (const book of orderToAdd.books) {
        await order.addBook(book.id, {
          through: { quantity: book.quantity },
          transaction,
        });
      }
      await transaction.commit();

      const addedOrder = await db.Order.findByPk(order.id, {
        include: [db.User, db.Book],
      });

      return addedOrder ? new OrderDTO(addedOrder) : null;
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      return null;
    }
  },

  update: async (id, order) => {
    console.log("------ order id: ", id, order);
    const updatedRow = await db.Order.update(order, {
      where: { id },
    });
    console.log(updatedRow);

    return updatedRow[0] === 1;
  },

  delete: async (id) => {
    const nbDeletedRow = await db.Order.destroy({
      where: { id },
    });

    return nbDeletedRow === 1;
  },
};

module.exports = orderService;
