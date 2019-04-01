class User {
  constructor(email, name) {
    this.email = email; // the constructor isn't meant to have methods of the class, just properties
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, 'just logged in!');
    return this;
  }

  logout() {
    console.log(this.email, 'just logged out...');
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.email, 'score is now', this.score);
    return this; // returns the instance of the object in question; it is possible to chaining methods like this
  }
}

class Admin extends User {
  // not necessarily needs a constructor when inheriting from another class; it gets the "mother constructor" as its own
  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    });
  }
}

var userOne = new User('ryu@bla.com', 'Ryu');
var userTwo = new User('yoshi@bla.com', 'Yoshi');
var admin = new Admin('crystal@bla.com', 'Crystal'); // still expects an email and name since it's inheriting from the mother class, even if it's an instance from another class

// the new keyword:
// creates a new empty object {}, sets the value of 'this' to be the new empty object and calls the constructor method.

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();

userOne.login().updateScore().updateScore().logout(); // method chaining

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne); // deletes the specified user through Admin class method
// userOne.deleteUser(userTwo); // should throw an error, since userOne doesn't have 'deleteUser' method 
console.log(users);