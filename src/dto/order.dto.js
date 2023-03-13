class OrderDTO {
  constructor({ id, Books }) {
    this.id = id;
    this.books = Books ? Books.map((book) => new OrderBookDTO(book)) : [];
  }
}

class OrderBookDTO {
  constructor({ id, MM_Order_Book }) {
    this.id = id;
    this.quantity = MM_Order_Book ? MM_Order_Book.quantity : null;
  }
}

module.exports = { OrderDTO, OrderBookDTO };
