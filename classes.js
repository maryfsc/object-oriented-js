class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

var userOne = new User('ryu@bla.com', 'Ryu');
var userTwo = new User('yoshi@bla.com', 'Yoshi');


// the new keyword:
// creates a new empty object {}, sets the value of 'this' to be the new empty object and calls the constructor method.

console.log(userOne);
console.log(userTwo);