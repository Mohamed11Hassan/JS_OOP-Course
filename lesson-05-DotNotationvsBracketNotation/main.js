/*======================Example 1=========================*/

let myObj = {
    "one": 1,
    "two-": 2
}


// Dot notation
console.log(myObj.one);

/*console.log(myObj."one");*/ // syntax error
/*console.log(myObj.two-);*/ // syntax error


// brackets notation
console.log(myObj['one']);
console.log(myObj['two-']);

/*======================Example 2=========================*/



let myObj2 = {
    1 : "one",
    2 : "two"
}

// Dot notation
/*console.log(myObj2.1);*/ // syntax error

// brackets notation
console.log(myObj2['1']);
console.log(myObj2['2']);


/*======================Example 3=========================*/


let myVar = "name",
    myObj3 = {
        name: "Mans",
    };

// dot notation
console.log(myObj3.myVar); // undefined

// brackets notation
console.log(myObj3[myVar]);