import { expect } from "chai";
import { mathEnforcer } from "../functions/MathEnforcer.js";

describe('Mathenforcer object tests', function(){

    describe('addFive function tests', function(){
        it('should return undefined when input is not a number', function(){
            expect(mathEnforcer.addFive('11')).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive(null)).to.be.undefined;
        });
        it('should return correct result when input is valid', function(){
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('should return correct result when input is negative number', function(){
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        //testing with floating point and defining the equality to 2nd digit
        it('should return correct result when floating point number is input', function(){
            expect(mathEnforcer.addFive(5.5)).to.closeTo(10.5, 0.01)
        });
    });

    describe('subtractTen function tests', function(){
        it('should return undefined when input is not a number', function(){
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        });
        it('should return correct result when input is positive number', function(){
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(100)).to.equal(90);
        });
        it('should return correct result when input is negative number', function(){
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('should return correct result when input is floating point number', function(){
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        })
    });

    describe('Sum function tests', function(){
        it('should return undefined when input is not a number', function(){
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            expect(mathEnforcer.sum({}, 5)).to.be.undefined;
            expect(mathEnforcer.sum([], 5)).to.be.undefined;
            expect(mathEnforcer.sum(null, 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
            expect(mathEnforcer.sum(5, [])).to.be.undefined;
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
            expect(mathEnforcer.sum(5, null)).to.be.undefined;
            expect(mathEnforcer.sum(null, null)).to.be.undefined;
        });
        it('should return correct sum when input is two positive numbers', function(){
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });
        it('should return correct sum when input are two negative numbers', function(){
            expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
        });
        it('returns correct sum when one of the numbers is negative', function(){
            expect(mathEnforcer.sum(5, -10)).to.equal(-5);
        });
        it('returns correct sum when input have floating point number', function(){
            expect(mathEnforcer.sum(5.5,4.5)).to.be.closeTo(10.0, 0.01);
        })
    });
});