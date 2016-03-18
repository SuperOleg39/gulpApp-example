let a = 1;

class Module {
    constructor( name ) {
        this.moduleName = name;

        console.log( this.moduleName );
    }
}

let app = new Module( 'Build' );

import { Events } from './modules/module'

import Dance from './modules/module'

let event = new Events('Oleg');
let dance = new Dance('fish');