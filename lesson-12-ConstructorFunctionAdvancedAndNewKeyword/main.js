
/*
    Constructor Function Advanced And New Keyword

*/

function sayHelloTo(someone) {

    return `Hello ${someone}`;

}

console.log(sayHelloTo("Mans"));

function phone(serial){
    this.serialNum = serial; 
}

let phone1 = new phone(13);
let phone2 =  phone(55);


console.log(phone1 instanceof phone);
console.log(phone2 instanceof phone);

console.log(phone1.constructor === phone);
console.log(phone2.constructor === phone);

console.log(phone1.serialNum);
//console.log(phone2.serialNum);

