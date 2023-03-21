const UserDTO = require("./user.dto");

class OrderDTO {
  constructor({ id, User, MM_Order_Books }) {
    this.id = id;
    this.user = User ? User : null;
    // this.user = User ? new UserDTO(User) : null;
    this.books = MM_Order_Books
      ? MM_Order_Books.map((book) => new OrderBookDTO(book))
      : [];
  }
}

class OrderBookDTO {
  constructor({ id, Book, Order, quantity }) {
    this.book = Book ? Book : null;
    this.order = Order ? Order : null;
    this.quantity = quantity ? quantity : null;
  }
}

module.exports = { OrderDTO, OrderBookDTO };
