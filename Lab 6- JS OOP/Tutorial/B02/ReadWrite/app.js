import PromptSync from "prompt-sync";

// Create a new instance of PromptSync
// const prompt = PromptSync();
const input = PromptSync();

const name = input("What is your name? ");
console.log(`Hello Mr./Ms., ${name}!`);

// SyntaxError: Cannot use import statement outside a module

const students = [
    { name: 'Ahmed', gender: 'Male', grade: 85, age: 23 },
    { name: 'Sara', gender: 'Female', grade: 77, age: 31 },
    { name: 'Hassen', gender: 'Male', grade: 92, age: 29 },
    { name: 'Zahra', gender: 'Female', grade: 95, age: 20 },
    { name: 'Abdulahi', gender: 'Male', grade: 54, age: 22 }
]

const theOlderstStudentName = students.reduce((prev, current) => {
    return (prev.age > current.age) ? prev : current
}).name;

const avg = students.reduce((sum, current) => sum + current.age, 0) / students.length;


console.log(`The oldest student is ${theOlderstStudentName}`);