'use strict!';

let isFunction = function (obj) {
    return typeof obj === 'function' || false;
};

let functionsAreEqual = function (listener, callback) {
    return listener.toString().replace(/ /g, '') === callback.toString().replace(/ /g, '');
};

export class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    addListener(label, callback) {
        if (!this.listeners.has(label)) {
            this.listeners.set(label, []);
        }

        this.listeners.get(label).push(callback);
    }

    removeListener(label, callback) {
        let listeners = this.listeners.get(label);
        let index;

        if (listeners && listeners.length) {
            listeners.reduce((i, listener) => {
                /*
                 * TODO: after Babel compilation, callback not equal listener
                 */
                if (isFunction(listener) && functionsAreEqual(listener, callback)) {
                    index = i;

                    return index;
                }

                return i;
            }, -1);

            if (index > -1) {
                listeners.splice(index, 1);
                this.listeners.set(label, listeners);

                return true;
            }
        }

        return false;
    }

    emit(label, ...args) {
        let listeners = this.listeners.get(label);

        if (listeners && listeners.length) {
            listeners.forEach((listener) => {
                listener(...args);
            });

            return true;
        }

        return false;
    }
}
