class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }

    set name(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    toString() {
        return `Person: ${this.#name}`;
    }
}

class Employee extends Person {

}
let p = new Person('John');

p.name = "Doe";
console.log(p.toString()); // Person: Doe

let e = new Employee('Jane');


