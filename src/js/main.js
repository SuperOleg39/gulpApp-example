'use strict!';

import { Calculator } from './modules/calculator';

const calculator = new Calculator();

console.log( calculator.multiplication(2, 3, 5, 15) );

import { EventEmitter } from './modules/EventEmitter';
import { Observer }     from './modules/Observer';

const observable = new EventEmitter();

const [observer1, observer2] = [
    new Observer(1, observable),
    new Observer(2, observable)
];

observable.emit("change", { a: 1 });


class User extends EventEmitter {
    constructor(id, subject) {
        super();
        this.id = id;
        this.addListener("create", (data) => this.onChange(data));
    }

    onChange(data) {
        console.log(`${this.id} notified of change:`, data);
        this.removeListener("create", (data) => this.onChange(data));
    }
}

const user = new User('Oleg', observable);

user.emit("create", { position: 'proger' });
user.emit("create", { position: 'designer' });


console.log(observable, observer1, observer2)
