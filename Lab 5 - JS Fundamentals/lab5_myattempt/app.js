// let names = ['yara', 'sara', 'hala', [1,2,3,4], true, false, 44];
// console.log(names);

// console.log(names[0]);


// // declare as const normally!!! stops from doing accidental changes
// //object literal
// const person = {
//     name: 'Ali',
//     age: 20,
//     hobbies: ['reading', 'swimming'],
//     isActive: true,
//     address:{
//         city: 'cairo',
//         street: 'el haram',
//         building:10
//     }
// }

// console.log('Name: '+person.name);
// console.log('City: '+person.address.city);
// console.log('Hobby: '+person.hobbies[1]);


// const day='mon';
// switch (day){
//     case 'mon':
//         console.log('tis monday');
//         break;
//     case 'tues':
//         console.log('tis tues');
//         break;
// }


// //use let not const cause i changes
// for (let i=0; i<10; i++){
//     console.log(i);
// }


// const names = ['yara', 'sara', 'hala', [1,2,3,4], true, false, 44];

// for (let name of names){
//     console.log(name);
// }

// for (let i in names){
//     console.log(i);
// }

// function add(a,b){
//     return a+b
// }

// let a=10;
// let b=20;


// function calculator(a,b, operation){
//     return operation(a,b);
// }

// calculator(10,20, (a,b) => a+b);
// calculator(10,20, (a,b) => a-b);
// calculator(10,20, (a,b) => a*b);
// calculator(10,20, (a,b) => a/b);


// let names = ['yara', 'sara', 'hala', [1,2,3,4], true, false, 44];

// names.forEach(name => console.log('the name is: '+name));

// let d=10;


// let result = c(a,b);
// console.log(result);


// let num=[1,2,3,4,5,6,7];
// let res = num.filter(a => a%2!=0).map(a=>a**2).reduce((a,b)=>a+b);
// console.log(res);

// const names = ['yara', 'sara', 'hala', 'ali', 'omar', 'ahmad'];
// const numbers=[1,2,3,4,5,6,7];

// //adding to end
// names.push('nour');
// console.log('after using push: ');
// console.table(names);

// //adding to start
// names.unshift('mohammad');
// console.log('after using unshift: ');
// console.table(names);

// //removing end
// const removed = names.pop();
// console.log('after using pop: ');
// console.table(names);


// //removin start
// const removedFirst = names.shift();
// console.log('after using shift: ');
// console.table(names);

// //remove specific index
// //(start, how many to remve)
// names.splice(2,2);
// console.log('after splice: ');
// console.table(names);

// names.splice(2,2,'lara');
// console.log('after splice: ');
// console.table(names);


// let [first, second, third] = names;
// console.log('first: '+first);
// console.log('sec: '+second);
// console.log('third: '+third);


// const numbers = [1,-1,2,3,4,-5,6,7,8,9,10];
// let neg = numbers.filter(n => n<0);

// console.log('neg numebr: '+ neg);

// let even = numbers.filter(n=> n%2==0);
// console.log('even: '+even);

// let find9 = numbers.find(n=> n==9);
// console.log("find 9: "+find9);


let numCom = [
    1,[2,3,[1,2,3]]
]
console.log(numCom.flat(Infinity));

const matrix = [[2, 3], [34, 89], [55, 101, 34], [34, 89, 34, 99]];

const flatten = matrix => matrix.flat();
let max = matrix.reduce(n=> n>);
const square = arr=>arr.map(num=>num**2);















