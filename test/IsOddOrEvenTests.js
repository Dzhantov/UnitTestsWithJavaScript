import {expect} from 'chai';
import { isOddOrEven } from '../functions/IsOddOrEven.js';

describe("IsOddOrEven function tests", function(){

    it("should return undefined when input is not a string", function(){
        expect(isOddOrEven(123)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(null)).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it("should return Even when string length is even", function(){
        expect(isOddOrEven("four")).to.equal('even');
        expect(isOddOrEven("fourfour")).to.equal('even');
    });

    it("should return Odd when string length is odd", function(){
        expect(isOddOrEven('one')).to.equal('odd');
        expect(isOddOrEven('oneee')).to.equal('odd');
    });

    it('should return correct value when different input is passed', function(){
        expect(isOddOrEven('')).to.equal('even');
        expect(isOddOrEven('odd')).to.equal('odd');
        expect(isOddOrEven('even')).to.equal('even');
        expect(isOddOrEven(null)).to.be.undefined;
    })
});