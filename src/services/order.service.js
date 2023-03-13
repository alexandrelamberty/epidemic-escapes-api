const { OrderDTO } = require("../dto/order.dto");
const db = require("../models");

const orderService = {
  getAll: async (offset, limit) => {
    console.log("Get All Orders");
    const { rows, count } = await db.Order.findAndCountAll({
      distinct: true,
      offset,
      limit,
      include: [db.Book],
    });
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
    console.log("Create a new Order", userId, orderToAdd);
    const transaction = await db.sequelize.transaction();

    let order = await db.Order.create({ UserId: userId });
    console.log("order", order);

    try {
      for (const book of orderToAdd.books) {
        await order.addBook(book.id, {
          through: { quantity: book.quantity },
          transaction,
        });
      }
      await transaction.commit();

      const addedOrder = await db.Order.findByPk(order.id, {
        include: [db.Book],
      });

      return addedOrder ? new OrderDTO(addedOrder) : null;
    } catch (err) {
      await transaction.rollback();
      return null;
    }
  },

  update: async (id, orderToUpdate) => {
    const updatedRow = await db.Order.update(orderToUpdate, {
      where: { id },
    });

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
