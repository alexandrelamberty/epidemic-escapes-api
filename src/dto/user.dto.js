const { OrderDTO } = require("./order.dto");

class UserDTO {
  constructor({ id, firstName, lastName, email, role, Address, Orders }) {
    console.log("User dto: ", Orders);
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.address = Address;
    this.orders = Orders ? Orders.map((order) => new OrderDTO(order)) : [];
  }
}

module.exports = { UserDTO };
