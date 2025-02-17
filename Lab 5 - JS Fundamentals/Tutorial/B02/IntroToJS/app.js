// console.log('Welcome to JavaScript world!');
// variables

// three types

// var, let, const , global

// name = "Amit"  //very very bad way of declaring variables
// console.log(name);

// second way of declaring variables

// let name = "Amit";


// if (true) {
//     name = "Amit Kumar";
//     console.log(name);
// }


// console.log(name);

// data types

// let name = "Amit";
// name = 29138092183;
// console.log( name);

// conditionals

// exactly like java
// let age = 20;
// if (age > 20) {
//     console.log('A');
// } else if (age == 20) {
//     console.log('B');
// } else {
//     console.log('C');
// }

// switch case

// let day = "Monday"

// switch (day) {
//     case "Monday":
//         console.log('Today is Monday');
//         break;
//     case "Tuesday":
//         console.log('Today is Tuesday');
//         break;
//     case "Wednesday":
//         console.log('Today is Wednesday');
//         break;
//     default:
//         console.log('Today is not Monday, Tuesday or Wednesday');
//         break;
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i < 10) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while(i < 10);

// let arrays = [11, 12, 13, 14, 15, [1, 2, 3, 4, 4], "String"];

// for (let i = 0; i < arrays.length; i++) {
//     console.log(arrays[i]);
// }

// for (let i of arrays) {
//     console.log(i);
// }
// for (let i in arrays) {
//     console.log(arrays[i]);
// }

// let a = 10, b, c, d;

// console.log(a);
// console.log(b);


// // object literals

// let person = {
//     name: "Amit",
//     age: 20,
//     address: {
//         city: "Delhi",
//         state: "Delhi"
//     },
//     hobbies: ['cricket', 'football', 'coding'],
// }

// console.log(person.name);
// console.log(person["name"]);
// console.log(person.address);


// functions

// function greet(name) {
//     console.log('Hello ' + name);
// }

// greet('Amit');

// function add(a, b) {
//     return a + b;
// }


// let add2 = function (a, b) {
//     return a + b;
// }

// // let a = 20;
// // let b = 30;

// // let result = add2(a, b);
// // let result2 = add2(10, 30);

// console.log(add2(2,4));


// let display = function (value) {
//     console.log('The result = ' + value);
// }

// let x = 20;

// let result = add2(10, 20);

// display(result);

function add(a, b) {
    return a + b;
}

let add2 = function (a, b) {
    return a + b;
}

let add3 = (a, b) => a + b

function powerOf(a, b) {
    return a ** b;
}

// (a,b) => a ** b

// function whoIsBigger(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }


// let anotherWhoIsBigger = (a, b) => a > b ? a : b

// console.log(whoIsBigger(10, 20));
// console.log(anotherWhoIsBigger(10, 20));

let myArray = [1, 2, 3, 4, 5]



console.log("Before adding ", myArray);

myArray.push(666);
console.log("After myArray.push(666) ", myArray);

// add to the beginning

myArray.unshift(999);
console.log("After myArray.unshift(999) , will add to the begging ", myArray);

// remove from the beginning

myArray.shift();

console.log("After myArray.shift() , will remove from the begging ", myArray);

// remove from the end

myArray.pop();

console.log("After myArray.pop() , will remove from the end ", myArray);


// delete from specific index

let result = myArray.splice(2, 3, 4, 5, 6);

console.log(result);

console.log("After myArray.splice(2, 1) , will remove from the index 2 ", myArray);

