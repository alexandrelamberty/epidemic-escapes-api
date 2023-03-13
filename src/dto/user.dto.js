class UserDTO {
  constructor({ id, firstName, lastName, email, role, Address }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.address = Address;
  }
}

module.exports = { UserDTO };
