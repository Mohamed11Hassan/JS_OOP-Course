/* 
    Defining Object with Object.create()
*/


/*======================Example 1=========================*/


let mainObject = {
    hasDiscount: true,
    showMsg: function () {return `you ${(mainObject.hasDiscount == true ? "have": "don't have")} discount`;} 
}

console.log(mainObject.showMsg());

let otherObject = Object.create(mainObject);

otherObject.hasDiscount = false;

console.log(otherObject.showMsg());

/*======================Example 2=========================*/

let mainObject2 = {
    hasDiscount: true,
    showMsg: function () {return `you ${(this.hasDiscount == true ? "have": "don't have")} discount`;} 
}

console.log(mainObject2.showMsg());

let otherObject2 = Object.create(mainObject2);

otherObject2.hasDiscount = false;

console.log(otherObject2.showMsg());