const { AuthorDTO } = require("../dto/author.dto");
const { Book } = require("../models");
const db = require("../models");

const authorService = {
  getAll: async (offset, limit) => {
    const { rows, count } = await db.Author.findAndCountAll({
      distinct: true,
      offset,
      limit,
    });
    return {
      authors: rows.map((author) => new AuthorDTO(author)),
      count,
    };
  },

  getAllWithBooks: async (offset, limit) => {
    const { rows, count } = await db.Author.findAndCountAll({
      distinct: true,
      offset,
      limit,
      include: [Book],
    });
    return {
      authors: rows.map((author) => new AuthorDTO(author)),
      count,
    };
  },

  getById: async (id) => {
    const author = await db.Author.findByPk(id);
    return author ? new AuthorDTO(author) : null;
  },

  create: async (authorToAdd) => {
    const author = await db.Author.create(authorToAdd);
    return author ? new AuthorDTO(author) : null;
  },

  update: async (id, authorToUpdate) => {
    const updatedRow = await db.Author.update(authorToUpdate, {
      where: { id },
    });
    return updatedRow[0] === 1;
  },

  delete: async (id) => {
    const nbDeletedRow = await db.Author.destroy({
      where: { id },
    });
    return nbDeletedRow === 1;
  },
};

module.exports = authorService;
