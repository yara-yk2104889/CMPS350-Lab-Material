import Animal from "./animal.js";

class Dog extends Animal {
    #tail;
    constructor(name, age, tail) {
        super(name, age);
        this.#tail = tail;
    }

    toString() {
        return `${super.toString()} and has a ${this.#tail} tail`;
    }

}

export default Dog;