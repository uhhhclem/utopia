/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.game');
goog.require('utopia.objects.die');

var die;
var game;

beforeEach(function() {
    game = new utopia.objects.game.Game();
    die = new utopia.objects.die.Die(game, 'die1');
})

describe('Die', function() {

    it('should roll a number from 1 to 6', function() {
        for (var i = 0; i < 10; i++) {
          die.roll()
          expect(1 <= die.value <= 6).toBeTruthy();
        }
    });
    
    it('should be selectable if it has a value', function() {
       die.value = null;
       expect(die.canSelect()).toBe(false);
       die.roll();
       expect(die.canSelect()).toBe(true);
    });
    
    it('should select and deselect repeatedly', function() {
      die.roll();
      for (var i = 0; i < 5; i++) {
        die.select();
        expect(die.selected).toBe(true);
        die.deselect();
        expect(die.selected).toBe(false);
      }
    });
    
})