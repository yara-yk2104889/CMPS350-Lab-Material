import Animal from './animal.js';
class Cat extends Animal {
    #whiskers;
    constructor(name, age, whiskers) {
        super(name, age);
        this.#whiskers = whiskers;
    }

    toString() {
        return `${super.toString()} and has ${this.#whiskers} whiskers`;
    }
}

export default Cat;