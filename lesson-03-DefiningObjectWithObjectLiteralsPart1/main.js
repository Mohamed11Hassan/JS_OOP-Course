/*
    Defining Object
    [1] Object literal
*/

let user = {
    // properties
    firstName: "Mohamed",
    lastName: "Hassan",

    // Methods

    getFullName: function () {
        return `Full name is : ${user.firstName} ${user.lastName}`;
    }
}


// access user properties 
console.log(user.firstName); // with dot notaion
console.log(user['firstName']); // with brackets notaion

// access user methods
console.log(user.getFullName()); 
