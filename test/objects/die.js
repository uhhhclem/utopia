/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.game');
goog.require('utopia.objects.die');

var die;
var game;

beforeEach(function() {
    game = new utopia.objects.game.Game();
    die = new utopia.objects.die.Die(game);
})

describe('Die', function() {
    
    it('should use mocked-out rolls', function() {
        var obj = new utopia.objects.die.Die(game, [1, 2, 3, 4, 5, 6])
        obj.roll();
        expect(obj.value).toBe(1);
        obj.roll()
        expect(obj.value).toBe(2);
    });
    
    it('should work if rolls aren\'t mocked', function(){
        die.roll()
        expect(1 <= die.value <= 6).toBeTruthy();
    });
    
    it('should be selectable if it has a value', function() {
       die.value = null;
       expect(die.canSelect()).toBe(false);
       die.roll();
       expect(die.canSelect()).toBe(true);
    });
})