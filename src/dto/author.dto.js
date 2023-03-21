class AuthorDTO {
  constructor({ id, firstName, lastName, Books }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName ?? null;
    // FIXME: map to dto
    this.books = Books ?? [];
  }
}

module.exports = { AuthorDTO };
