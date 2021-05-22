
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

const arr = [1, 2, 3, 4, 5];

console.log(Array.prototype);