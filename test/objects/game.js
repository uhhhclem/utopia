/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.game');

describe('Game', function() {
    
    var game;
    
    beforeEach(function() {
       game = new utopia.objects.game.Game();
    });
    
   it('should be initialized with regions', function() {
       expect(game.regions[0].name).toBe('Halebeard Peak');
       expect(game.dice.die1).toBeDefined();
   });
   
   it('should select and deselect a die', function() {
       var die1 = game.dice.die1;
       var die2 = game.dice.die2;
       // dice are only selectable if they have a value, remember?
       die1.roll();
       die2.roll();
       expect(die1).not.toBe(die2);
       expect(game.selectedDie).toBeNull();
       
       for (var i = 0; i < 10; i++) {
         game.selectDie(die1);
         expect(game.selectedDie).toBe(die1);
         
         game.selectDie(die2);
         expect(game.selectedDie).toBe(die2);
       }
       
       expect(game.selectedDie).toBe(die2);
       game.deselectDie(die1);
       expect(game.selectedDie).toBe(die2);
       
       game.deselectDie(die2);
       expect(game.selectedDie).toBe(null);
   });
   
   it('should indicate which region is in progress', function() {
     expect(game.inProgress()).toBe(null);
     game.regions[5].searchBoxes[2].rows[1][2].die = "a die";
     var r = game.inProgress();
     expect(r).not.toBe(null);
     expect(r.name).toBe('The Fiery Maw');
   });
});