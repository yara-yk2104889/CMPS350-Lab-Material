class Animal {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    // two options
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }

    set age(age) {
        this.#age = age;
    }
    get age() {
        return this.#age;
    }

    // your own other methods
    displayContent() {
        return `Name: ${this.#name}, Age: ${this.#age}`;
    }
}
export default Animal;

// console.log(animal.name); // Dog
// animal.name = 'Cat';
// console.log(animal.name); // Cat

// console.log(animal.displayContent()); // 55
