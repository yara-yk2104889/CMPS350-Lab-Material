// console.log("Welcome to the world of Javascript");
// /*
// Exercise 1: A warm-up exercise to reinforce basic JavaScript syntax.
// Exercise 2: Practice arrays and control structures.
// Exercise 3: Practice arrow functions and array functions.

// */

// // Variables


// const gender = "Male"; // constant
// let isMarried = false;  //modifiable

// // types of variables

// let name = "John"
// let age = 25; // number
// let isAdult = true; // boolean
// let city = null; // null
// let country; // undefined


// console.log(country); // undefined

// if (country === undefined) {
//     console.log("Country is undefined");
// }

// // object literal , and we create them on the fly
// let person = {
//     name: "John",
//     age: "25",
//     gender: "male",
//     toString: function () {
//         return this.name + " " + this.age + " "
//     }
// }

// // console.log(person);

// // console.log(person.toString());
// // console.log(person["name"]);


// // Arrays or lists

// let myArray = [1, 2, 3, "John", true, person, [1, 2, 3]];

// // console.log(myArray);
// // console.log('My Name is ', myArray[3], " and I am ", myArray[1], " years old");

// // string literals

// console.log(`My Name is ${myArray[3]} and I am ${myArray[1]} years old`);

// // Control Structures

// let age = 25;

// if (age > 18) {
//     console.log("You are an adult");
// }
// else if (age === 18) {
//     console.log("You are 18 years old");
// }
// else {
//     console.log("You are a minor");
// }

// // switch case

// let day = "Monday";

// switch (day) {
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     default:
//         console.log("Today is not Monday or Tuesday");
// }

// // loops

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 10);


const fruits = ["Apple", "Banana", "Orange", "Mango"];

// add an element to the end of the array
console.log("Before adding", fruits);

fruits.push("Pineapple");

console.log("Before using the fruit.push Pineapple", fruits);


// add to the beginning of the array
fruits.unshift("Strawberry");

console.log("After using the fruit.unshift Strawberry", fruits);

// remove from the end of the array
fruits.pop();

console.log("After using the fruit.pop", fruits);

// remove from the beginning of the array
fruits.shift();

console.log("After using the fruit.shift", fruits);

// removing element from specific index

let r = fruits.splice(1, 2);

console.log("The value of the splice", r);

console.log("After using the fruit.splice", fruits);

// add into specific index

fruits.splice(1, 0, "Kiwi", "Peach");

console.log("After using the fruit.splice", fruits);

// array distructuring

let [a, b, c,
    ...d] = ["apple", "orange", "banana", "mango", "kiwi", "peach"];

console.log("a ", a);
console.log("b ", b);
console.log("c ", c);
console.log("d ", d);

// array functions

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers);
console.log(numbers.sort((a, b) => a - b));



console.log(d.sort());
console.log(d.sort().reverse());


// (a,b) => a + b;



function functionName(params) {
    console.log(params);

}
functionName([1, 2, 3, 4, , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);


numbers = [1, 2, 3, 4, 5];

for (let value of numbers) {
    console.log(value);
}

for (let index in numbers) {
    console.log(index);
}

let person = {
    name: "John",
    age: 25
}
