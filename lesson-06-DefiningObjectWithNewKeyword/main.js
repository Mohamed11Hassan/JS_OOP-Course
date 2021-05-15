/*
    Defining Object with new keyword
*/

let user = new Object();

user.firstName = "Mohamed";
user.lastName = "Hassan";
user['age'] = 25;

user.getFullName = () => `My full name is: ${user.firstName} ${user.lastName}`;

console.log(user);
console.log(user.getFullName());