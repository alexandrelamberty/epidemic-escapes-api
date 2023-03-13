const { BookDTO } = require("../dto/book.dto");
const { Genre, Publisher, Author } = require("../models");
const db = require("../models");

const bookService = {
  getAll: async (offset, limit) => {
    const { rows, count } = await db.Book.findAndCountAll({
      distinct: true,
      offset,
      limit,
      include: [Genre, Publisher, Author],
    });
    return {
      books: rows.map((track) => new BookDTO(track)),
      count,
    };
  },

  getById: async (id) => {
    const book = await db.Book.findByPk(id, {
      include: [Genre, Publisher, Author],
    });
    return book ? new BookDTO(book) : null;
  },

  create: async (bookToAdd) => {
    const transaction = await db.sequelize.transaction();
    let book;
    try {
      book = await db.Book.create(bookToAdd, { transaction });
      for (const author of bookToAdd.authors) {
        await book.addAuthor(author.id, { transaction });
      }
      await transaction.commit();

      const addedBook = await db.Book.findByPk(book.id, {
        include: [Genre, Publisher, Author],
      });

      return addedBook ? new BookDTO(addedBook) : null;
    } catch (err) {
      await transaction.rollback();
      return null;
    }
  },

  update: async (id, bookToUpdate) => {
    const updatedRow = await db.Book.update(bookToUpdate, {
      where: { id },
    });
    return updatedRow[0] === 1;
  },

  delete: async (id) => {
    const nbDeletedRow = await db.Book.destroy({
      where: { id },
    });
    return nbDeletedRow === 1;
  },

  updateCover: async (id, filename) => {
    const data = {
      cover: `/images/covers/${filename}`,
    };
    const updatedRow = await db.Book.update(data, {
      where: { id },
    });
    return updatedRow[0] === 1;
  },
};

module.exports = bookService;
