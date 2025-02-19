// let add = function (a, b) {
//     return a + b;
// }

// let add2 = (a, b) => a + b;

// function display(value) {
//     console.log('The result = ' + value);
// }
// let display2 = function (value) {
//     console.log('The output is = ' + value);
// }

// function addAndDisplay(a, b, functionIWantToCall) {
//     let result = a + b;
//     functionIWantToCall(result);
// }

// let a = 10
// let b = 20

// addAndDisplay(a, b, display);
// addAndDisplay(a, b, display2);
// addAndDisplay(10, 20, function (value) {
//     console.log('The output is = ' + value);
// });

// addAndDisplay(10, 20, value => console.log('The output is = ' + value))


// let numbers = [1, 2, 11, 22, 3, 4, 5]
// let names = ["CJohn", "AJane", "BJack", "DJill", "James"]

// console.log(numbers);

// console.log(numbers.sort((a, b) => b - a));
// console.log(names.sort());


// let numbers = [1, 2, -11, 50, [-3, [4, [5, 3, [7, 4]]]], 22]

// // console.log(numbers
// //     .flat(4));

// // numbers
// //     .flat(Infinity)
// //     .filter(a => a % 2 === 1)
// //     .map(a => a ** 2)
// //     .filter(a => a < 50)
// //     .forEach(a => console.log(a));



// // let even = numbers.filter(x => x % 2 == 0)

// // console.log(even);


// // let find22 = numbers.find(x => x === 50)

// // console.log(find22);


// // let squaredNumbers = numbers.map(a => a ** 2)

// // squaredNumbers.forEach(a => console.log(`

// //     The value ${a} and some more text

// // `));



// //  x => x < 0


// // reduce 

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers);

// // let acc = 0;

// // for (let curr of numbers) {
// //     console.log(`Current value is ${curr} and accumulator is ${acc}`);
// //     acc += curr;
// // }

// // console.log(`Sum is ${acc}`);
// let sum = 0;

// for (let curr of numbers) {
//     console.log(`Current value is ${curr} and accumulator is ${acc}`);
//     sum += curr;
// }

// console.log(`Multiplication is ${acc}`);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reduce((acc, curr) => acc * curr);

let maxNumber = numbers.reduce((acc, curr) => acc > curr ? acc : curr);


let [a, ...rest] = [1, 2, 3, 4, 5, 65]

console.log(a);
console.log(rest);




