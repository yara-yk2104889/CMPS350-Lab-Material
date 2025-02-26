import Animal from "./animal.js";
import Cat from "./cat.js";

let animal = new Animal("Dog", 55);
console.log(animal.name); // Dog
animal.name = "Cat";
console.log(animal.name); // Cat


let cat = new Cat("Kitty", 3, 6);
console.log(cat.name); // Kitty
console.log(cat.whiskers); // 6
