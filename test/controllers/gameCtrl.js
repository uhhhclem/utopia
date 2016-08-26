/* global expect */
/* global goog */
/* global inject */
/* global spyOn */

goog.require('utopia.module');

describe('gameCtrl', function() {
    
    var ctrl;
    
    beforeEach(module('utopia'));
    
    beforeEach(inject(function($controller, game){
        ctrl = $controller('gameCtrl', {game: game})
    }));

    it('should instantiate the game object', function() {
        expect(ctrl.game).toBeDefined();
        expect(ctrl.game.regions.length).toBe(6);
        expect(ctrl.game.regions[0].name).toBe('Halebeard Peak');
    });
    
    it('should be able to roll the dice', function() {
        ctrl.roll();
    })
    
})