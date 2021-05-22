
/*
    Class Syntax And Introduction
*/

class user {
    constructor(name, email){
        this.userName = name;
        this.userEmail = email;
    }

    sayHello () {
        return `hello ${this.userName}`;
    }

    showEmail () {
        return `hello ${this.userEmail}`;
    }
}

let user1 = new user("mohamed", "em@gmail.com");
let user2 = new user("hassan", "m@gmail.com");

console.log(user1.userName);
console.log(user2.userName);