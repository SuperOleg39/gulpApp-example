let a = 1;

class Module {
    constructor( name ) {
        this.moduleName = name;

        console.log( this.moduleName );
    }
}

const app = new Module( 'Build' );

import { Events } from './modules/module'

import Dance from './modules/module'

const event = new Events('Oleg');
const dance = new Dance('fish');