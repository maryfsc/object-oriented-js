var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){ // ES6 syntax sugar for 'prop': function() {.... blablabla};
        console.log(this.email, 'has logged in'); // 'this' refers to this actual object; it's a property of this object;
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

// this
// if there were a 'this' here, it would be referencing the global object

console.log(userOne.name);
userOne.login();
userOne.logout();

userOne.name = "Yoshi";
console.log(userOne.name);

userOne['email'] = 'yoshi@bla.com';
console.log(userOne.email);

var prop = 'name';
console.log(userOne[prop]); // it is possible to access a property of an object through variables with square brackets

userOne.age = 25;
console.log(userOne.age); // it is possible to add properties later on the object, but it's not recommended