class PublisherDTO {
  constructor({ id, name, Books }) {
    this.id = id;
    this.name = name;
    // FIXME: map to DTO
    this.books = Books ? Books : null;
  }
}

module.exports = { PublisherDTO };
