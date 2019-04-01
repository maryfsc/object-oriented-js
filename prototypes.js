function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
  this.login = function() {
    console.log(this.email, 'has logged in!');
  }
}


var userOne = new User('ryu@bla.com', 'Ryu');
var userTwo = new User('yoshi@bla.com', 'Yoshi');

console.log(userOne);
userTwo.login();