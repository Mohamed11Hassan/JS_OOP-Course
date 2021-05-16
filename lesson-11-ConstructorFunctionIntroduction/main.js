
/*
    Constructor Function
*/

function phone(serial, color, price) {
    this.serial = serial;
    this.color = color;
    this.price = price;
}

let phone1 = new phone(123, "red", 500);
let phone2 = new phone(456, "blue", 500);

console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);

console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);