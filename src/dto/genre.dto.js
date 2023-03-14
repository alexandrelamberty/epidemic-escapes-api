class GenreDTO {
  constructor({ id, name, Books }) {
    this.id = id;
    this.name = name;
    this.books = Books ? Books : null;
  }
}

module.exports = { GenreDTO };
