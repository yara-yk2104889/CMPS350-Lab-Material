// // console.log("Welcome to the world of Javascript");
// // /*
// // Exercise 1: A warm-up exercise to reinforce basic JavaScript syntax.
// // Exercise 2: Practice arrays and control structures.
// // Exercise 3: Practice arrow functions and array functions.

// // */

// // // Variables


// // const gender = "Male"; // constant
// // let isMarried = false;  //modifiable

// // // types of variables

// // let name = "John"
// // let age = 25; // number
// // let isAdult = true; // boolean
// // let city = null; // null
// // let country; // undefined


// // console.log(country); // undefined

// // if (country === undefined) {
// //     console.log("Country is undefined");
// // }

// // // object literal , and we create them on the fly
// // let person = {
// //     name: "John",
// //     age: "25",
// //     gender: "male",
// //     toString: function () {
// //         return this.name + " " + this.age + " "
// //     }
// // }

// // // console.log(person);

// // // console.log(person.toString());
// // // console.log(person["name"]);


// // // Arrays or lists

// // let myArray = [1, 2, 3, "John", true, person, [1, 2, 3]];

// // // console.log(myArray);
// // // console.log('My Name is ', myArray[3], " and I am ", myArray[1], " years old");

// // // string literals

// // console.log(`My Name is ${myArray[3]} and I am ${myArray[1]} years old`);

// // // Control Structures

// // let age = 25;

// // if (age > 18) {
// //     console.log("You are an adult");
// // }
// // else if (age === 18) {
// //     console.log("You are 18 years old");
// // }
// // else {
// //     console.log("You are a minor");
// // }

// // // switch case

// // let day = "Monday";

// // switch (day) {
// //     case "Monday":
// //         console.log("Today is Monday");
// //         break;
// //     case "Tuesday":
// //         console.log("Today is Tuesday");
// //         break;
// //     default:
// //         console.log("Today is not Monday or Tuesday");
// // }

// // // loops

// // for (let i = 0; i < 10; i++) {
// //     console.log(i);
// // }

// // let i = 0;
// // while (i < 10) {
// //     console.log(i);
// //     i++;
// // }

// // let j = 0;
// // do {
// //     console.log(j);
// //     j++;
// // } while (j < 10);


// const fruits = ["Apple", "Banana", "Orange", "Mango"];

// // add an element to the end of the array
// console.log("Before adding", fruits);

// fruits.push("Pineapple");

// console.log("Before using the fruit.push Pineapple", fruits);


// // add to the beginning of the array
// fruits.unshift("Strawberry");

// console.log("After using the fruit.unshift Strawberry", fruits);

// // remove from the end of the array
// fruits.pop();

// console.log("After using the fruit.pop", fruits);

// // remove from the beginning of the array
// fruits.shift();

// console.log("After using the fruit.shift", fruits);

// // removing element from specific index

// let r = fruits.splice(1, 2);

// console.log("The value of the splice", r);

// console.log("After using the fruit.splice", fruits);

// // add into specific index

// fruits.splice(1, 0, "Kiwi", "Peach");

// console.log("After using the fruit.splice", fruits);

// // array distructuring

// let [a, b, c,
//     ...d] = ["apple", "orange", "banana", "mango", "kiwi", "peach"];

// console.log("a ", a);
// console.log("b ", b);
// console.log("c ", c);
// console.log("d ", d);

// // array functions

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(numbers);
// console.log(numbers.sort((a, b) => a - b));



// console.log(d.sort());
// console.log(d.sort().reverse());


// // (a,b) => a + b;



// // function functionName(params) {
// //     console.log(params);

// // }
// // functionName([1, 2, 3, 4, , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);


// // numbers = [1, 2, 3, 4, 5];

// // for (let value of numbers) {
// //     console.log(value);
// // }

// // for (let index in numbers) {
// //     console.log(index);
// // }

// // // let person = {
// // //     name: "John",
// // //     age: 25
// // // }

// // console.table([1, 2, 3, 4, 5]);


// // // functions
// // function add(a, b) {
// //     return a + b;
// // }

// // console.log(add(1, 2));

// // // they are treated as objects , or first class citizens

// // let add2 = function (a, b) {
// //     return a + b;
// // }

// // let display = function (value) {
// //     console.log(value);
// // }
// // let result = add2(1, 2);
// // display(result);

// // let a = 10;
// // let b = 20;

// // add2(a, b);
// // add2(10, 20);



// // addAndDisplay(10, 20, display);
// // addAndDisplay(a, b, display);


// function addAndDisplay(a, b, theFunctionToUse) {
//     let result = a + b;
//     theFunctionToUse(result);
// }

// addAndDisplay(10, 20, a => console.log(value));

// addAndDisplay(10, 20, function (value) {
//     console.log("The value is ", value);
// });


// addAndDisplay(10, 20, value => console.log(value));

// addAndDisplay(10, 20, function (value) {
//     console.log("The value is ", value);
// });

// let theName = (a, b) => a ** b;

// theName(2, 3);

// function add(a, b) {
//     return a + b;
// }

// let add2 = function (a, b) {
//     return a + b;
// }

// let add3 = (a, b) => a + b;

// // addAndDisplay(10, 20, function (a, b) {return a + b;});
// addAndDisplay(10, 20, a => console.log(a));
// addAndDisplay(10, 20, a => console.log("The value is ", a));
// // arrow function

// // let numbers = [1, 23, 33, 4, 5, 6, 7, 8, 9, 10];

// // // to add all of this numbers

// // let sum = numbers.reduce((a, b) => a + b);

// // console.log(sum);


// // array methods
// let compareFunction = function (a, b) {
//     return b - a;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10];
// let names = ["John", "DoeRT", "Jan", "SmitEE"];

// // console.log(numbers);
// console.log(numbers.sort((a, b) => a - b));

// let squaredNumbers = numbers.map(a => a ** 2)

// console.log(numbers.filter(a => a % 2 !== 0));

// console.log(numbers.find(a => a === 19));

// console.log(numbers);

// let result = numbers
//     .filter(a => a % 2 !== 0)
//     .map(a => a ** 2)
//     .forEach(a => console.log(a));


numbers = [11, 2, 3, 4, 5, 8];


let lastNumber = numbers.reduce((acc, curr) => {
    console.log("acc", acc, "curr", curr);

    return acc * curr;
}, 10);


console.log(lastNumber);


