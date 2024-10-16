import {expect} from 'chai';
import { foodDelivery } from '../functions/FoodDelivery.js';

describe('Food delivery object tests',function(){
    describe('getCategory function tests', function(){
        it('returns correct string for Vegan', function(){
            expect(foodDelivery.getCategory('Vegan')).to.equal('Dishes that contain no animal products.');
        });
        it('returns correct string for Vegetarian', function(){
            expect(foodDelivery.getCategory('Vegetarian')).to.equal('Dishes that contain no meat or fish.');
        });
        it('returns correct string for Gluten-Free', function(){
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal('Dishes that contain no gluten.');
        });
        it('returns correct string for All', function(){
            expect(foodDelivery.getCategory('All')).to.equal('All available dishes.');
        });
        it('throws error message when noone of the categories is passed as an input', function(){
            expect(()=> foodDelivery.getCategory('Meat')).to.throw('Invalid Category!');
        })
    });
    describe('addMenuItem function tests', function(){
        it('add items with valid price and return correct array lenght', function(){
            const menuItems = [
                {
                    name: 'salad', price: 8
                },
                {
                    name: 'Soup', price: 5
                },
                {
                    name: 'Steak', price: 20
                }
            ];
            expect(foodDelivery.addMenuItem(menuItems, 10)).to.equal('There are 2 available menu items matching your criteria!');
        });

        it('throws error when invalid params input', function(){
            const menuItems = [
                {
                    name: 'salad', price: 8
                },
                {
                    name: 'Soup', price: 5
                },
                {
                    name: 'Steak', price: 20
                }
            ];
            expect(()=> foodDelivery.addMenuItem('string', 10)).to.throw('Invalid Information!');
            expect(()=> foodDelivery.addMenuItem(menuItems, '10')).to.throw('Invalid Information!');
        });

        it('throws error when price is lower than 5 or menu items less than 1', function(){
            const menuItems = [
                {
                    name: 'salad', price: 8
                },
                {
                    name: 'Soup', price: 5
                },
                {
                    name: 'Steak', price: 20
                }
            ];
            expect(()=> foodDelivery.addMenuItem([], 10)).to.throw('Invalid Information!');
            expect(()=> foodDelivery.addMenuItem(menuItems, 2)).to.throw('Invalid Information!');
        })
    });
    describe('calculateOrderCost function tests', function(){
        it('calculates correct price without discount', function(){
            const shipping = ['standard'];
            const addOns = ['sauce', 'beverage'];

            expect(foodDelivery.calculateOrderCost(shipping, addOns, false)).to.equal('You spend $7.50 for shipping and addons!');
        });

        it('calculates correct price with discount', function(){
            const shipping = ['express'];
            const addOns = ['sauce', 'beverage'];

            expect(foodDelivery.calculateOrderCost(shipping, addOns, true)).to.equal('You spend $8.07 for shipping and addons with a 15% discount!');
        });

        it('throws error when invalid parameters are given', function(){
            expect(()=> foodDelivery.calculateOrderCost('string', [], true)).to.throw('Invalid Information!');
            expect(()=> foodDelivery.calculateOrderCost([], 'string', true)).to.throw('Invalid Information!');
            expect(()=> foodDelivery.calculateOrderCost([], [], 'yes')).to.throw('Invalid Information!');
        });
    });
});