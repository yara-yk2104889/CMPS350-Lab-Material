import Cat from "./model/cat.js";
import Dog from "./model/dog.js";
import Animal from "./model/animal.js";

const cat = new Cat("Fluffy", 3, 4);
const dog = new Dog("Bark", 5, 1);
const animal = new Animal("Animal", 10);

console.log(cat.toString());
console.log(dog.toString());
console.log(animal.toString());



