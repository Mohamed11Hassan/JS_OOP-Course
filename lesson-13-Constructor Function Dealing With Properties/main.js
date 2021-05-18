
/*
    Constructor Function Dealing With Properties
*/

function user(fname, lname, age, country) {
    this.firstName = fname;
    this.lastName = lname;
    this.userAge = age;
    this.userCountry = country;

    this.fullName = function () {
        return `Full name is: ${this.firstName} ${this.lastName}`;
    }

    this.ageInDays = function() {
        return `Age in days: ${this.userAge * 365} days`;
    }
}

let user1 = new user("Mohamed", "Hassan", "25", "Egypt");
let user2 = new user("Ahmed", "Adel", "24", "KSA");

console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.userAge);
console.log(user1.userCountry);
console.log(user1.fullName());
console.log(user1.ageInDays());

console.log("#".repeat(30));

console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.userAge);
console.log(user2.userCountry);
console.log(user2.fullName());
console.log(user2.ageInDays());