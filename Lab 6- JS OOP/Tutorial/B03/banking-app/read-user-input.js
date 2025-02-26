// npm init
import PromptSync from 'prompt-sync';
const input = PromptSync();

const name = input('What is your name? ');

console.log(`Hello, ${name}!`);