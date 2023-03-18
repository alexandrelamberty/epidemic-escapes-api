class GenreDTO {
  constructor({ id, name, Books }) {
    this.id = id;
    this.name = name;
    // FIXME: map to dto
    this.books = Books ? Books : null;
  }
}

module.exports = { GenreDTO };
