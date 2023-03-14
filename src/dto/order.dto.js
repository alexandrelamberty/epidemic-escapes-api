const { MM_Order_Book } = require("../models");
const UserDTO = require("./user.dto");

class OrderDTO {
  constructor({ id, User, MM_Order_Books }) {
    // console.log("----> OrderDTO Books: ", Books);
    this.id = id;
    this.user = User ? User : null;
    // console.log("---> OrderDTO: ", MM_Order_Books);
    // this.user = User ? new UserDTO(User) : null;
    console.log("OrderDTO MM_Order_Books: ", MM_Order_Books);
    this.books = MM_Order_Books
      ? MM_Order_Books.map((book) => new OrderBookDTO(book))
      : [];
  }
}

class OrderBookDTO {
  constructor({ id, Book, Order, quantity }) {
    // console.log("OrderBookDTO: ", User);
    // console.log("----> OrderBookDTO id:", id);
    // console.log("----> OrderBookDTO :", MM_Order_Book);
    // this.id = id;
    // FIXME: associations
    // this.OrderId = MM_Order_Book ? MM_Order_Book.OrderId : null;
    // this.BookId = MM_Order_Book ? MM_Order_Book.BookId : null;
    console.log("OrderBookDTO quantity: ", quantity);
    this.book = Book ? Book : null;
    this.order = Order ? Order : null;
    this.quantity = quantity ? quantity : null;
  }
}

module.exports = { OrderDTO, OrderBookDTO };
