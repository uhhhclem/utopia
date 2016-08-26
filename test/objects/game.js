/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.game');

describe('Game', function() {
    
   it('should be initialized with regions', function() {
       var obj = new utopia.objects.game.Game();
       expect(obj.regions[0].name).toBe('Halebeard Peak');
       expect(obj.dice['die1']).toBeDefined();
   }) 
});