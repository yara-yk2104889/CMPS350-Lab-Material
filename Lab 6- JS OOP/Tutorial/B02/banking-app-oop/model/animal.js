class Animal {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }

    get age() {
        return this.#age;
    }

    toString() {
        return `${this.#name} is ${this.#age} years old`;
    }

}

export default Animal;


