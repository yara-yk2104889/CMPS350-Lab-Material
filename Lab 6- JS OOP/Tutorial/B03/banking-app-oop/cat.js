import Animal from './animal.js';

class Cat extends Animal {
    constructor(name, age, whiskers) {
        super(name, age);
        this.whiskers = whiskers;
    }

}
export default Cat;