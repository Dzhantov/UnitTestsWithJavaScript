import {expect} from 'chai';
import { lookupChar } from '../functions/CharLookUp.js';

describe('charLookup function tests', function(){
    it('should return undefined when invalid input', function(){
        expect(lookupChar(123,0)).to.be.undefined;
        expect(lookupChar([],0)).to.be.undefined;
        expect(lookupChar({},0)).to.be.undefined;
        expect(lookupChar(null,0)).to.be.undefined;
        expect(lookupChar('string',[])).to.be.undefined;
        expect(lookupChar('string',{})).to.be.undefined;
        expect(lookupChar('string','string2')).to.be.undefined;
        expect(lookupChar('string',1.5)).to.be.undefined;
    });

    it('should return incorect index error when index is negative number', function(){
        expect(lookupChar('javascript', -1)).to.equal('Incorrect index');
    });

    it('should return incorrect index when index is bigger then string.length', function(){
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
        expect(lookupChar('hello', 10)).to.equal('Incorrect index');
    });

    //positive cases
    it('should return correct char hen input is valid', function(){
        expect(lookupChar('javascript', 0)).to.equal('j');
        expect(lookupChar('javascript', 9)).to.equal('t');
        expect(lookupChar('javascript', 4)).to.equal('s');
    });

    //edge case
    it('should handle edge cases with empty string', function(){
        expect(lookupChar('', 0)).to.equal('Incorrect index');
    });
});