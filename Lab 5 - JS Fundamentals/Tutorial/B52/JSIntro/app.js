// // let names = ["Alia", "Omar", "Ahmed", "Ali", "Sara", [1, 2, 3, 4], 1, 2, true];

// // console.log(names);

// // console.log(names[0]);


// // // object literal
// // const person = {
// //     name: "Ali",
// //     age: 20,
// //     hobbies: ["Reading", "Swimming", "Coding"],
// //     isActive: true,
// //     address: {
// //         city: "Cairo",
// //         street: "El Haram",
// //         building: 10
// //     }
// // }

// // // equivalent to person class

// // console.log("Name: " + person.name)
// // console.log("His city is " + person.address.city)
// // console.log("His hobbies : " + person.hobbies[1])

// // if else statement , switch case statement and ternary operator

// // const age = 20;

// // if (age > 18) {
// //     console.log("You are adult")
// // } else if (age === 18) {
// //     console.log("You are just 18")
// // }
// // else {
// //     console.log("You are not adult")
// // }

// // const day = "Monday";

// // switch (day) {
// //     case "Monday":
// //         console.log("Today is Monday")
// //         break;
// //     case "Tuesday":
// //         console.log("Today is Tuesday")
// //         break;

// //     default:
// //         console.log("Today is not Monday or Tuesday")

// // }

// // for (let i = 0; i < 10; i++) {
// //     console.log(i)
// // }

// // let i = 0;
// // while (i < 10) {
// //     console.log(i)
// //     i++;
// // }

// // do {
// //     console.log(i)
// //     i++;
// // } while (i < 10);


// // const names = ["Ali", "Omar", "Ahmed", "Sara", "Nada", "Hana"];

// // for (let name of names) {
// //     console.log(name);
// // }

// // for (let i in names) {
// //     console.log(names[i]);
// // }


// // the main differences
// // function add(a, b) {
// //     return a + b;
// // }



// // let add = function (a, b) {
// //     return a + b;
// // }
// // let sub = function (a, b) {
// //     return a - b;
// // }
// // let div = function (a, b) {
// //     return a / b;
// // }

// // let a = 10;
// // let b = 20;
// function calculator(a, b, theOperationToBeDone) {
//     return theOperationToBeDone(a, b)

// }

// console.log(calculator(10, 20, (a, b) => a + b));
// console.log(calculator(10, 20, (a, b) => a - b));
// console.log(calculator(10, 20, (a, b) => a * b));
// console.log(calculator(10, 20, (a, b) => a / b));

// const names = ["Ali", "Omar", "Ahmed", "Sara", "Nada", "Hana"];


// function display(name) {
//     console.log(name)
// }

// // names.forEach(function display(name) {
// //     console.log(name)
// // })
// names.forEach(name => console.log("The name is " + name));


// // function addAndDisplay(a, b) {
// //     let result = a + b;
// //     console.log(result)
// // }

// // (a, b) => {
// //     let result = a + b;
// //     console.log(result)
// // }

// // (a , b) => console.log(a + b)

// 

// array methods

// const names = ["Ali", "Omar", "Ahmed", "Sara", "Nada", "Hana"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // build in methods for arrays

// // we can add elements to the end of the array
// names.push("Nour");
// console.log("Last Array : ", names);
// console.log("After using names.push('Nour')");
// console.table(names);

// // we can add elements to the beginning of the array
// names.unshift("Mohamed");
// console.log("After using names.unshift('Mohamed')");
// console.table(names);

// // we can remove the last element of the array
// const elementRemoved = names.pop();
// console.log("After using names.pop()");

// console.log("The removed element is : ", elementRemoved);
// console.table(names);

// // we can remove the first element of the array
// const firstElementRemoved = names.shift();
// console.log("After using names.shift()");
// console.log("The removed element is : ", firstElementRemoved);
// console.table(names);


// // remove from a specific index

// // splice(startIndex , howManyElementsToRemove)
// names.splice(2, 2);
// console.log("After using names.splice(2, 2)");
// console.table(names);

// // splice(startIndex , howManyElementsToRemove , comma separated elements to be added)

// names.splice(2, 2, "Nour", "Mohamed");
// console.log("After using names.splice(2, 2, 'Nour', 'Mohamed')");
// console.table(names);

// names.splice(2, 2, "Sara");
// console.log("After using names.splice(2, 2, 'Sara')");
// console.table(names);

// array destructuring

// let first = names[0];
// let everyOneElse = names.slice(1);


// let [first, second, third, fourth] = names;

// console.log("First : ", first);
// // console.log("Second : ", second);
// // console.log("Third : ", third);
// // console.log("Forth : ", fourth);

// // console.table(names);

// // let everyOneElse = names.slice(1);
// // console.log("Every one else : ", everyOneElse);

// // filter , find , map , reduce , sort 

// const numbers = [1, -1, 2, 3, 4, -4, 5, 6, 7, 8, 9, 10];
// let negativeNumbers = numbers.filter(n => n < 0);

// console.log("Negative Numbers : ", negativeNumbers);

// let evenNumbers = numbers.filter(n => n % 2 == 0);

// console.log("Even Numbers : ", evenNumbers);

// let find9 = numbers.find(n => n === 9);
// console.log("Find 9 : ", find9);

// // `
// // mix text with variables
// // `
// // ${name}
// // `
// let squaredNumbers = numbers.map(n => `<li>  ${n * n} </li>`);
// console.log("Squared Numbers : ", squaredNumbers);




// const numbers = [1, -1, 2, 3, 4, -4, 5, 6, 7, 8, 9, 10];

// numbers
//     .filter(n => n < 0)
//     .map(n => n * n)
//     .forEach(n => console.log(n));

// last method is reduce

// [1,2,3,4,5,6]

let sum = numbers.reduce((acc, curr) => acc + curr, 0);