// console.log("Welcome to Javascript");
// node --version

// three ways to declare variables

// let b = 120;
// const c = 30;

// conditional statements
//if else if else
//switch case
//ternary operator

// let a = 10;
// if (a == 10) {
//     console.log("a is 10");
// } else if (a == 20) {
//     console.log("a is 20");
// }
// else {
//     console.log("a is not 10");
// }

// let day = "monday";

// switch (day) {
//     case "monday":
//         console.log("Today is Monday");
//         break;
//     case "tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "wednesday":
//         console.log("Today is Wednesday");
//         break;
//     default:
//         console.log("Today is not a weekday");
// }

// a > 10 ? console.log("a is greater than 10") : console.log("a is less than 10");
// skip loops
// let array = [11, 12, 13, 14, 15];

// for (let x of array) {
//     console.log(x);
// }

// console.log("**********");

// for (let x in array) {
//     console.log(x);
// }

// // array

// array = [1, 2, 3, 4];

// // add an element to the end of the array
// array.push(51);
// console.log("After using the push method");
// console.table(array);

// console.table(array);

// // add an element to the beginning of the array
// array.unshift(100);
// console.log("After using the unshift method");
// console.table(array);


// // remove from the end
// array.pop();
// console.log("After using the pop method");
// console.table(array);

// // remove from the beginning
// array.shift();
// console.log("After using the shift method");
// console.table(array);

// // remove from any position
// // array.splice(startingIndex, howManyElements);
// // array.splice(startingIndex, howManyElements, theNewElementsIwantToAdd);

// let removedElements = array.splice(2, 0, 100, 200, 300);
// console.log("After using the splice method");
// console.table(array);
// console.log("Removed Elements");
// console.table(removedElements);

// sort an array

// array = [33, 44, 2, 21, 33, 11, 221, 2221, -11, 1]
// array.sort((a, b) => a - b);
// console.log("After using the sort method");
// console.table(array);


// function assendingSor(a, b) {
//     return a - b;
// }


// let add = function (a, b) {
//     return a + b;
// }
let sub = function (a, b) {
    return a - b;
}

// (a, b) => a - b;

function calculator(a, b, operation) {
    return operation(a, b);
}

// function isMale(gender) {
//     if (gender === 'Male') {
//         return true;
//     } else {
//         return false;
//     }
// }

// (gender) => {
//     if (gender === 'Male') {
//         return true;
//     } else {
//         return false;
//     }
// }

// let decideGender = gender => (gender === 'male') ? "male" : "female"

// decideGender("male")
// // let a = 10;
// // let b = 20;

// // console.log(calculator(a, b, add));
// console.log(calculator(10, 20, function (a, b) {
//     return a + b;
// }));
// console.log(calculator(10, 20, (a, b) => a - b));


// // console.log(calculator(10, 20, sub));
// // console.log(calculator(10, 20, div));
// // console.log(calculator(10, 20, mul));

// let array = [1, [2, [3, 8, [9]]], 4, [5, 6, 7, 8, 9], 10];

// console.log(array.flat(Infinity));
// console.log(array);

// filter , map, reduce , find , findIndex , forEach

// let array = [11, -2, -3, 4, 5, 6, 7, 8, 9];

// function decide(a) {
//     return a < 0;
// }

// console.log(array.filter(a => a % 2 == 1));
// console.log(array.find(a => a === "9"));
// console.log();
// let indexToDelete = array.findIndex(a => a === 9);
// if (indexToDelete !== -1) {
//     array.splice(indexToDelete, 1);
// } else {
//     console.log("Element not found");
// }

// console.log(array);

let array = [11, -1, -2, -3, 4, 5, 6, 7, 8, 9];

// let negatives = array.filter(a => a < 0);
// let squared = negatives.map(a => a ** 2);
// let lessThan8 = squared.filter(a => a < 8);
// lessThan8.forEach(a => console.log(a));

// array
//     .filter(a => a < 0)
//     .map(a => a ** 2)
//     .filter(a => a < 8)
//     .forEach(a => console.log(a));

// reduce(a function that takes two parameters , and returns a single value)
// array = [1, 12, 31, 14, 51, 16, 17, 8, 9];
// let f = (acc, curr) => acc * curr
// array.reduce((acc, curr) => {
//     if (curr % 2 == 0) {
//         return acc + curr;
//     }
//     return acc;
// },0);

// acc = 1, curr = 12
// acc = 12, curr = 31
// acc = 31, curr = 14
// acc = 31, curr = 51

let person = {
    name: "Ali",
    age: 20,
    hobbies: ["cricket", "football", "hockey"],
    toString: function () {
        return `Name : ${this.name} , Age : ${this.age}`;
    }
}

console.log(person.toString());
console.log(`
    Name : ${person.name} , 
    Age : ${person.age}
    `
);


let names = ["Ali", "Ahmed", "Asad", "Ahsan", "Adeel"];

names
    .map(name => `<li>${name}</li>`)
    .forEach(name => console.log(name));