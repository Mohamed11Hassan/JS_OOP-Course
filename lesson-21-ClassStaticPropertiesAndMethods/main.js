
/*
    Class Static Properties And Methods
*/

class user {

    // static properties
    static counter = 0;

    constructor(name, email, counter){
        this.userName = name;
        this.userEmail = email;
        this.userCounter = counter;
        user.counter++;
    }

    sayHello () {
        return `hello ${this.userName}`;
    }

    showEmail () {
        return `hello ${this.userEmail}`;
    }

    // static method
    static countObjects = function() {
        return `${this.counter} Objects Created.`; // this here is for user class not the objected created out of it
    }
}

let user1 = new user("mohamed", "em@gmail.com");
let user2 = new user("hassan", "m@gmail.com");
let user3 = new user("hassan", "m@gmail.com");
let user4 = new user("hassan", "m@gmail.com");

console.log(user1.userName);
console.log(user2.userName);

console.log(typeof user1); // function(constructor function) 
console.log(user === user.prototype.constructor); // true

console.log(user.countObjects());