'use strict!';

export class Observer {
    constructor(id, subject) {
        this.id = id;
        this.subject = subject;
        this.subject.addListener('change', (data) => this.onChange(data));
    }

    onChange(data) {
        console.log(`${this.id} notified of change:`, data);
    }
}
