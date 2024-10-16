import { expect } from "chai";
import { artGallery } from "../functions/ArtGallery.js";

describe("art gallery object tests", function(){
    describe('addArtwork function tests', function(){
        it('returns error when invalid title or artist', function(){
            expect(()=> artGallery.addArtwork(123, "30 x 40", 'Van Gogh')).to.throw('Invalid Information!');
            expect(()=> artGallery.addArtwork('Title', "30 x 40", 123)).to.throw('Invalid Information!');
        });

        it('throws error for invalid dimensions with invalid dimensions input', function(){
            expect(()=> artGallery.addArtwork('Title', 'string', 'Artist')).to.throw('Invalid Dimensions!');
            expect(()=> artGallery.addArtwork('Title', '30by30', 'Artist')).to.throw('Invalid Dimensions!');

        });

        it('throws error for invalid artist with invalid artist input', function(){
            expect(()=> artGallery.addArtwork('Title', '30 x 40', 'Artist'))
            .to.throw('This artist is not allowed in the gallery!');
        });

        it('returns correct message when input is correct', function(){
            expect(artGallery.addArtwork('Title', '30 x 40', 'Van Gogh'))
            .to.equal("Artwork added successfully: 'Title' by Van Gogh with dimensions 30 x 40.")
        });
    });

    describe('calculate cost function tests', function(){
        it('throws error message when invalid params input', function(){
            expect(()=> artGallery.calculateCosts('100', 100, true)).to.throw('Invalid Information');
            expect(()=> artGallery.calculateCosts(100, '100', true)).to.throw('Invalid Information');
            expect(()=> artGallery.calculateCosts(100, 100, 'true')).to.throw('Invalid Information');
            expect(()=> artGallery.calculateCosts(-100, 100, true)).to.throw('Invalid Information');
            expect(()=> artGallery.calculateCosts(100, -100, true)).to.throw('Invalid Information');
        });
        it('calculates total cost without discount', function(){
            expect(artGallery.calculateCosts(100, 200, false)).to.equal('Exhibition and insurance costs are 300$.');
        });
        it('calculates total cost with discount', function(){
            expect(artGallery.calculateCosts(100, 200, true)).to.equal('Exhibition and insurance costs are 270$, reduced by 10% with the help of a donation from your sponsor.');
        });
    });
    describe('organize exhibits function tests', function(){
        it('throws error when input is invalid', function(){
            expect(()=> artGallery.organizeExhibits('10', 2)).to.throw('Invalid Information!');
            expect(()=> artGallery.organizeExhibits(10, '2')).to.throw('Invalid Information!');
            expect(()=> artGallery.organizeExhibits(-10, 2)).to.throw('Invalid Information!');
            expect(()=> artGallery.organizeExhibits(10, -2)).to.throw('Invalid Information!');
        });

        it('returns correct message when artowkr is less than 5', function(){
            expect(artGallery.organizeExhibits(10,3)).to.equal('There are only 3 artworks in each display space, you can add more artworks.')
        });
        it('returns correct message when artowkr is bigger than 5', function(){
            expect(artGallery.organizeExhibits(20,4)).to.equal('You have 4 display spaces with 5 artworks in each space.')
        });
    });
});