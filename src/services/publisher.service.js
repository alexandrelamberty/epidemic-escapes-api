const { PublisherDTO: PublisherDTO } = require("../dto/publisher.dto");
const db = require("../models");

const publisherService = {
  getAll: async (offset, limit) => {
    const { rows, count } = await db.Publisher.findAndCountAll({
      distinct: true,
      offset,
      limit,
    });
    return {
      publishers: rows.map((publisher) => new PublisherDTO(publisher)),
      count,
    };
  },

  getById: async (id) => {
    const publisher = await db.Publisher.findByPk(id);
    return publisher ? new PublisherDTO(publisher) : null;
  },

  create: async (publisherDto) => {
    const publisher = await db.Publisher.create(publisherDto);
    return publisher ? new PublisherDTO(publisher) : null;
  },

  update: async (id, publisherDto) => {
    const updatedRow = await db.Publisher.update(publisherDto, {
      where: { id },
    });
    return updatedRow[0] === 1;
  },

  delete: async (id) => {
    const nbDeletedRow = await db.Publisher.destroy({
      where: { id },
    });
    return nbDeletedRow === 1;
  },
};

module.exports = publisherService;
