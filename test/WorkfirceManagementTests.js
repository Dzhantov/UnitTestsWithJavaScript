import {expect} from 'chai';
import { workforceManagement } from '../functions/WorkforceManagement.js';

describe('workforce management tests', function(){
    describe('recruitStaff function tests', function(){
        it('throws error if the role is different from Developer', function(){
            expect(()=> workforceManagement.recruitStaff('Name1', 'QA', 10 ))
            .to.throw('We are not currently hiring for this role.');
        });
        it('shows not suitable message, when experience is lower than 4', function(){
            expect(workforceManagement.recruitStaff('Name1', 'Developer', 3)).to.equal('Name1 is not suitable for this role.');
        });
        it('shows not suitable message, when experience is 4', function(){
            expect(workforceManagement.recruitStaff('Name1', 'Developer', 3)).to.equal('Name1 is not suitable for this role.');
        });
        it('gives correct message if all input fields are valid', function(){
            expect(workforceManagement.recruitStaff('Name1', 'Developer', 10)).to.equal('Name1 has been successfully recruited for the role of Developer.');
        });
    });

    describe('computeWages function tests', function(){
        it('throws error message if input is not a number', function(){
            expect(()=> workforceManagement.computeWages('10')).to.throw("Invalid hours");
        });
        it('throws error message if input is less than 0', function(){
            expect(()=> workforceManagement.computeWages(-1)).to.throw("Invalid hours");
        });
        it('calculates correct sum if hoursWorked is bigger than 160', function(){
            expect(workforceManagement.computeWages(161)).to.equal(4398);
        });
        it('calculates correct sum if hoursWorked is less than 160', function(){
            expect(workforceManagement.computeWages(150)).to.equal(2700);
        });
        it('calculates correct sum if hoursWorked is 160', function(){
            expect(workforceManagement.computeWages(160)).to.equal(2880);
        });
    });

    describe('dismissEmployee function tests', function(){
        it('throws error if input not array', function(){
            expect(()=> workforceManagement.dismissEmployee('string', 1)).to.throw('Invalid input');
        });
        it('throws error if index is not a number', function(){
            expect(()=> workforceManagement.dismissEmployee(['string1', 'string2', 'string3'], 'y')).to.throw('Invalid input');
        });
        it('throws error if index is out of range', function(){
            expect(()=> workforceManagement.dismissEmployee(['string1', 'string2', 'string3'], 17)).to.throw('Invalid input');
        });
        it('returns the correct string when valid input is given', function(){
            expect(workforceManagement.dismissEmployee(['name1', 'name2', 'name3'],1)).to.equal('name1, name3');
        })
    })
});