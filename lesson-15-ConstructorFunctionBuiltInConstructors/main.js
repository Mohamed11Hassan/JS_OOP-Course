
/*
    Constructor Function Built In Constructors
*/

function user(name){
    this.userName = name;
    this.welcome = function () {
        return this.userName;
    }
}

let user1 = new user("Mans");
let user2 = new user("Hassan");

let obj1 = new Object({a: 1});
let obj2 = new Object({a: 2});

let num1 = new Number(1);
let num2 = new Number(5);

let str1 = new String("ahmed");
let str2 = new String("Mahmoud");