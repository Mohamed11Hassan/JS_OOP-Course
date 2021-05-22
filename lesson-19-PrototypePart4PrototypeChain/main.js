
/*
    Prototype Part 4 Prototype Chain
*/

function user(name){
    /* 
        [1] create empty object
        [2] assign the new object to this context
        [4] new object created  prototype = constructor function prototype
                this.__proto__ = user.__prototype
                this keyword = {} object you created
    */

    // ES5
   /*if(!(this instanceof user)){
        throw new Error("the Object must be created with new keyword");
   }*/

   // ES6

   if(!new.target){
        throw new Error("the Object must be created with new keyword");
   }
    
    this.userName = name;
}

let user1 = new user("Mans");
let user2 = user("Mans");
console.log(user.prototype);
console.log(user1);
console.log(use21);