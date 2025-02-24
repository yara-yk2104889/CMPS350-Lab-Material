import PromptSync from "prompt-sync";

const input = PromptSync();

const name = input("Enter your name: ");
console.log(`Hello, ${name}!`);

const products = [
    { id: 1, name: 'Apple 14 Pro Max', price: 4500 },
    { id: 2, name: 'iPad Pro 12.9-inch', price: 5600 },
    { id: 3, name: 'MacBook Pro 16-inch', price: 12000 }
];
const others = products.filter(a => a.id !== 3);
console.log(others);
// i want to delete id 3


// const index = products.findIndex(a => a.id === 3)
// products.splice(index, 1);
// console.log(products);