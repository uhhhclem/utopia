/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.game');

describe('Game', function() {
    
   it('should be initialized with regions', function() {
       var obj = new utopia.objects.game.Game();
       expect(obj.regions['hp'].name).toBe('Halebeard Peak');
   }) 
});