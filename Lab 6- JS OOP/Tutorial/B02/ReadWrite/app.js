import PromptSync from "prompt-sync";

// Create a new instance of PromptSync
// const prompt = PromptSync();
const input = PromptSync();

const name = input("What is your name? ");
console.log(`Hello Mr./Ms., ${name}!`);

// SyntaxError: Cannot use import statement outside a module