'use strict!';

import chai from 'chai';

chai.should();


import { DomHelper } from '../js/modules/domHelper'


describe('module DOM helper', () => {

    const domHelper = new DomHelper();

    it('return DOM element', () => {
        let div = domHelper.createRect( 'div', 'first-element' );
    })

});