'use strict!';

import chai from 'chai';

chai.should();


import { Calculator } from '../js/modules/calculator'


describe('module calculator', () => {

    const calculator = new Calculator();

    it('return sum of arguments', () => {
        let sum = calculator.addition(2, 3);
        sum.should.be.a('number');
        sum.should.equal(5);

        sum = calculator.addition(2, 3, 5);
        sum.should.be.a('number');
        sum.should.equal(10);

        sum = calculator.addition(2);
        sum.should.be.a('number');
        sum.should.equal(2);
    })

    it('return difference of arguments', () => {
        let sum = calculator.subtraction(5, 2);
        sum.should.be.a('number');
        sum.should.equal(3);

        sum = calculator.subtraction(11, 1, 5);
        sum.should.be.a('number');
        sum.should.equal(5);

        sum = calculator.subtraction(2);
        sum.should.be.a('number');
        sum.should.equal(2);
    })

    it('return product of arguments', () => {
        let sum = calculator.multiplication(2, 5);
        sum.should.be.a('number');
        sum.should.equal(10);

        sum = calculator.multiplication(2, 2, 2);
        sum.should.be.a('number');
        sum.should.equal(8);

        sum = calculator.multiplication(2);
        sum.should.be.a('number');
        sum.should.equal(2);
    })

    it('return ratio of arguments', () => {
        let sum = calculator.division(10, 2);
        sum.should.be.a('number');
        sum.should.equal(5);

        sum = calculator.division(21, 3, 7);
        sum.should.be.a('number');
        sum.should.equal(1);

        sum = calculator.division(2);
        sum.should.be.a('number');
        sum.should.equal(2);
    })

});