import { expect } from "chai";
import { analyzeArray } from "../functions/ArrayAnalyzer.js";

describe('ArrayAnalyzer tests', function(){
    it('should return undefined if the input is not an array', function(){
        expect(analyzeArray(123)).to.be.undefined;
        expect(analyzeArray('string')).to.be.undefined;
        expect(analyzeArray({})).to.be.undefined;
        expect(analyzeArray(null)).to.be.undefined;
    });
    it('returns undefined when input is empty array', function(){
        expect(analyzeArray([])).to.be.undefined;
    });
    it('returns undefined when input is array of non-numbers', function(){
        expect(analyzeArray(['string', 'two', '3', '4'])).to.be.undefined;
        expect(analyzeArray(['string', 4])).to.be.undefined;
        expect(analyzeArray([4, 'string'])).to.be.undefined;
        expect(analyzeArray([null, 4])).to.be.undefined;
    });

    it('returns correct object when input is correct', function(){
        expect(analyzeArray([1, 2, 3, 4 ,5])).to.deep.equal({min: 1, max: 5, length: 5});
        expect(analyzeArray([-1, -2, -3, -4 ,-5])).to.deep.equal({min: -5, max: -1, length: 5});
    });

    it('returns correct object when array has 1 element', function(){
        expect(analyzeArray([1])).to.deep.equal({min: 1, max: 1, length: 1});
    });
    it('returns correct object when array has equal elements', function(){
        expect(analyzeArray([3, 3 , 3, 3])).to.deep.equal({min: 3, max: 3, length: 4});
    });
    it('returns correct object when array holds floating-point numbers', function(){
        expect(analyzeArray([1.1, 2.2, 3.3])).to.deep.equal({min: 1.1, max: 3.3, length: 3});
    })
});