const { OrderDTO } = require("../dto/order.dto");
const db = require("../models");

const orderService = {
  getAll: async (offset, limit) => {
    console.log("Get All Orders");
    const { rows, count } = await db.Order.findAndCountAll({
      distinct: true,
      offset,
      limit,
      include: [
        {
          model: db.User,
        },
        {
          model: db.MM_Order_Book,
          include: [db.Book, db.Order],
        },
      ],
    });
    // console.log(rows);
    return {
      orders: rows.map((order) => {
        // console.log(order.MM_Order_Books);
        return new OrderDTO(order);
      }),
      count,
    };
  },

  getById: async (id) => {
    const order = await db.Order.findByPk(id, {
      include: [
        {
          model: db.User,
        },
        {
          model: db.MM_Order_Book,
          include: [db.Book, db.Order],
        },
      ],
    });
    console.log("Get Order By Id: ", order);
    // order.getBooks();
    // console.log(order);
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

  update: async (id, updateOrder) => {
    console.log("------ update order id: ", id, updateOrder);

    const transaction = await db.sequelize.transaction();

    try {
      // Retrieve the order
      let order = await db.Order.findByPk(id, {
        include: [db.Book],
      });
      //console.log("update order: ", await order.getBooks());

      // Remove the Book association
      order.setBooks([]);

      // Update the Book association
      for (const book of updateOrder.books) {
        await order.addBook(book.id, {
          through: { quantity: book.quantity },
          transaction,
        });
      }
      // Update the book details
      // const updatedRow = await db.Order.update(order, {
      //   where: { id },
      // });

      await transaction.commit();
      return true;
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      return null;
    }
  },

  delete: async (id) => {
    const nbDeletedRow = await db.Order.destroy({
      where: { id },
    });

    return nbDeletedRow === 1;
  },
};

module.exports = orderService;
