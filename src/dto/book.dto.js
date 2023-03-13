const { AuthorDTO } = require("./author.dto");

class BookDTO {
  constructor({ id, title, description, Genre, Publisher, Authors }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.genre = Genre;
    this.publisher = Publisher;
    this.authors = Authors
      ? Authors.map((author) => new AuthorDTO(author))
      : [];
    // retail price ...
  }
}

module.exports = { BookDTO };
