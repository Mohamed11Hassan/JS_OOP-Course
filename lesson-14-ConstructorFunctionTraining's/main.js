
/*
    Constructor Function Built In Constructors
*/

function user(name, email, age) {
    this.userName = name;
    this.userEmail = email;
    this.userAge = age;

    this.updateName = function(newName) {
        this.userName = newName;
    }

    this.showEmail = function(showEmail) {
        if(showEmail === true) {
            return `Email is: ${this.userEmail}`;
        } else {
            return `Data is private`;
        }
    }
}

let user1 = new user("Mans", "mans25@gmail.com", 25);

console.log(user1.userName);
user1.updateName("Walaa");
console.log(user1.userName);
console.log(user1.showEmail(false));