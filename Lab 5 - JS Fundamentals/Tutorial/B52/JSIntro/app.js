// let names = ["Alia", "Omar", "Ahmed", "Ali", "Sara", [1, 2, 3, 4], 1, 2, true];

// console.log(names);

// console.log(names[0]);


// // object literal
// const person = {
//     name: "Ali",
//     age: 20,
//     hobbies: ["Reading", "Swimming", "Coding"],
//     isActive: true,
//     address: {
//         city: "Cairo",
//         street: "El Haram",
//         building: 10
//     }
// }

// // equivalent to person class

// console.log("Name: " + person.name)
// console.log("His city is " + person.address.city)
// console.log("His hobbies : " + person.hobbies[1])

// if else statement , switch case statement and ternary operator

// const age = 20;

// if (age > 18) {
//     console.log("You are adult")
// } else if (age === 18) {
//     console.log("You are just 18")
// }
// else {
//     console.log("You are not adult")
// }

// const day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Today is Monday")
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday")
//         break;

//     default:
//         console.log("Today is not Monday or Tuesday")

// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++;
// }

// do {
//     console.log(i)
//     i++;
// } while (i < 10);


// const names = ["Ali", "Omar", "Ahmed", "Sara", "Nada", "Hana"];

// for (let name of names) {
//     console.log(name);
// }

// for (let i in names) {
//     console.log(names[i]);
// }


// the main differences
// function add(a, b) {
//     return a + b;
// }



// let add = function (a, b) {
//     return a + b;
// }
// let sub = function (a, b) {
//     return a - b;
// }
// let div = function (a, b) {
//     return a / b;
// }

// let a = 10;
// let b = 20;
function calculator(a, b, theOperationToBeDone) {
    return theOperationToBeDone(a, b)

}

console.log(calculator(10, 20, (a, b) => a + b));
console.log(calculator(10, 20, (a, b) => a - b));
console.log(calculator(10, 20, (a, b) => a * b));
console.log(calculator(10, 20, (a, b) => a / b));

const names = ["Ali", "Omar", "Ahmed", "Sara", "Nada", "Hana"];


function display(name) {
    console.log(name)
}

// names.forEach(function display(name) {
//     console.log(name)
// })
names.forEach(name => console.log("The name is " + name));


// function addAndDisplay(a, b) {
//     let result = a + b;
//     console.log(result)
// }

(a, b) => {
    let result = a + b;
    console.log(result)
}

(a , b) => console.log(a + b)




