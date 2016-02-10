let a = 1;

class Module {
    constructor( name ) {
        this.moduleName = name;

        console.log( this.moduleName );
    }
}

let app = new Module( 'Build' );


fetch('../index.html')
  .then(function(response) {
    console.log(111)
    return response.text()
  }).then(function(body) {
    console.log(222)
    document.body.innerHTML = body
  })


import { Events } from './module'

import Dance from './module'

let event = new Events('Oleg');
let dance = new Dance('fish');