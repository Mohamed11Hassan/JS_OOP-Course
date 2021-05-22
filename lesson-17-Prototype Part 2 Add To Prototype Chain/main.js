
/*
    Prototype Part 1 Intro

*/

function user(name){
    this.userName = name;
    this.welcome = function () {
        return this.userName;
    }
}

let user1 = new user("Mans");
let user2 = new user("Hassan");

console.log(user.prototype);

user.prototype.addTitle = function () {
    return `Mr. ${this.userName}`;
}

console.log(Object.prototype);

Object.prototype.elzero = "mohamed Mans";

const myObj = {a: 1, b: 2};

console.log(myObj.isPrototypeOf);