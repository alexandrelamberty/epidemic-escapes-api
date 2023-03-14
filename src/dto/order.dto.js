class OrderDTO {
  constructor({ id, User, Books }) {
    this.id = id;
    this.user = User ? User : null;
    this.books = Books ? Books.map((book) => new OrderBookDTO(book)) : [];
  }
}

class OrderBookDTO {
  constructor({ id, MM_Order_Book }) {
    this.id = id;
    this.order = MM_Order_Book ? MM_Order_Book.OrderId : null;
    this.book = MM_Order_Book ? MM_Order_Book.getBook : null;
    this.quantity = MM_Order_Book ? MM_Order_Book.quantity : null;
  }
}

module.exports = { OrderDTO, OrderBookDTO };
