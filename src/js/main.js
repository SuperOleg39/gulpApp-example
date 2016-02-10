let a = 1;

class Module {
    constructor( name ) {
        this.moduleName = name;

        console.log( this.moduleName );
    }
}

let app = new Module( 'Build' );