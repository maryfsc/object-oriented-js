// constructor function
function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function() {
  this.online = true;
  console.log(this.email, 'has logged in!');
}

User.prototype.logout = function() {
  this.online = false;
  console.log(this.email, 'has logged out!');
}

var userOne = new User('ryu@bla.com', 'Ryu');
var userTwo = new User('yoshi@bla.com', 'Yoshi');
// the instances have a __proto__ property that "points" to the prototype that originated them

console.log(userOne);
userTwo.login();
userTwo.logout();


/*
Every native object type has a prototype; any custom object or class will have a prototype;
Is like a map for that object type. It contains the functionality (methods) of each object created.
They're not repeated in each instance; it's defined once in a single prototype and replicated to each instances, "borrowing" methods from the mother proto.
It cannot be called upon the instances of said prototype.
*/



