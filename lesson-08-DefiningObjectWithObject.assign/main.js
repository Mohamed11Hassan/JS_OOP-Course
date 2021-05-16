/*
    Defining Object with Object.assign()
*/

const src1 = {
    prop1: "value1",
    prop2: "value2",
    method1: function () {
        return 'method one';
    }
}

const src2 = {
    prop3: "value3",
    prop4: "value4",
    method2: function () {
        return 'method two';
    }
}

const target = {
    prop5: "value5",
}

Object.assign(target, src1, src2, {prop6: "value6"});

console.log(target);