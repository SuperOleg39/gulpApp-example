'use strict!';

export class DomHelper {

    createRect(tagName, className, id) {
        let elem = document.createElement(tagName);

        elem.className = className;

        if (id) {
            elem.id = id;
        }

        return elem;
    }

}
