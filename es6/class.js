/**
 * class
 */

function Person1(name) {
    this.name = name;
}

Person1.prototype.eat = function() {
    return this.name + " is eating";
}


function Developer1() {
    Person1.apply(this, arguments);
}

Developer1.prototype = Object.create(Person1.prototype);
Developer1.prototype.constructor = Developer1;

Developer1.prototype.dev = function() {
    return this.name + " is coding";
}

Developer1.prototype.eat = function () {
    const superEat = Person1.prototype.eat.apply(this);
    return `${superEat}, developer ${this.name} is eating`;
}

const person1 = new Person1('person');
const developer1 = new Developer1('eonnine');
console.log(person1.eat()); // person is eating
console.log(developer1.eat()); // eonnine is eating, developer eonnine is eating
console.log(developer1.dev()); // eonnine is coding


class Person2 {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return `${this.name} is eating`;
    }
}

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

class Developer2 extends Person2 {
    constructor(name) {
        super(name);
    }

    dev() {
        return `${this.name} is coding`;
    }

    eat() {
        return `${super.eat()}, developer ${this.name} is eating`
    }
}

const person2 = new Person2('person');
const developer2 = new Developer2('eonnine');
console.log(person1.eat()); // person is eating
console.log(developer1.eat()); // eonnine is eating, developer eonnine is eating
console.log(developer1.dev()); // eonnine is coding