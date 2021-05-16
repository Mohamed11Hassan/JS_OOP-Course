
/*
    delete Opreator
*/

const user = {name: "Mans"};

console.log(user);
console.log(user.name);


/*delete user;*/

delete user.name;

console.log(user);
console.log(user.name);



console.log(`${"#".repeat(30)} Ex02 ${"#".repeat(30)}`);
/*========================Example 2=========================*/

const freezedObject = Object.freeze({
    name : "hassan",
    age: "25"
});

console.log(freezedObject);
console.log(freezedObject.name);

console.log(delete freezedObject.name)

console.log(freezedObject);
console.log(freezedObject.name);

console.log(`${"#".repeat(30)} Ex03 ${"#".repeat(30)}`);
/*========================Example 3=========================*/

const eObj = {};
Object.defineProperty(eObj, "a", {value: 1, configurable: false});

console.log(eObj);
console.log(eObj.a);
console.log(delete eObj.a);
console.log(eObj.a);


console.log(`${"#".repeat(30)} Ex04 ${"#".repeat(30)}`);
/*========================Example 4=========================*/

const eObj2 = {};
Object.defineProperty(eObj2, "a", {value: 2, configurable: true});

console.log(eObj2);
console.log(eObj2.a);
console.log(delete eObj2.a);
console.log(eObj2.a);

