
/*
    for..in loop
    loop through the properties of the objects
*/

const user = {
    name : "Mans",
    country: "Egypt",
    age: "25",
    salary: 8000
}

let finalData = '';

for (let info in user) {
    let ele = document.createElement('div');
    ele.innerText = `${info}: ${user[info]}`;
    document.body.appendChild(ele);
    ele.style.cssText = `background-color:#ddd;padding:20px;margin-bottom:20px;width:400px;border-radius:5px`;

}