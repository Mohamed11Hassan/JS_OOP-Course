/*
    Defining Object
    [1] Object literal
*/

let user = {
    // properties
    firstName: "Mohamed",
    lastName: "Hassan",
    age: 25,
    adresses: {
        eg: "Cairo",
        ksa: "Madina",

        /*getMainAdress: function () {
            return `main address in Egypt is in: ${user.adresses.eg}`;
        }*/

        getMainAdress: () => `main address in Egypt is in: ${user.adresses.eg}`,
    },

    // Methods

    getFullName: function () {
        return `Full name is : ${user.firstName} ${user.lastName}`;
    },

    getAgeInDays: () => `age in days ${user.age * 365}`,
}


// access user properties 
console.log(user.firstName); // with dot notaion
console.log(user['firstName']); // with brackets notaion

console.log(user.adresses.eg);
console.log(user['adresses']['eg']);
// access user methods
console.log(user.getFullName()); 
console.log(user.getAgeInDays()); 
console.log(user.adresses.getMainAdress()); 