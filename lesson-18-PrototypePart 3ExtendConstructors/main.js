
/*
    Prototype Part 3 Extend Constructors

*/

let myString = "mans";

console.log(String.prototype);

String.prototype.zFill = function(width) {
    let result = this;

    while(result.length < width) {
        result = `0${result}`;
    }

    return result.toString();
}

console.log("153".zFill(6));
console.log("13".zFill(6));
console.log("15388".zFill(6));

String.prototype.sayYouLoveMe = function() {
    return `I love ${this}`;
}