/* global expect */
/* global goog */
/* global inject */

goog.require('utopia.module');
goog.require('utopia.objects.game')

describe('utDie', function() {
    
    var $compile;
    var $rootScope;
    var $templateCache;
    var game;
    
    beforeEach(module('templates'));
    beforeEach(module('utopia'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _game_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $templateCache = _$templateCache_;
        game = _game_;
    }));

  it('contains the value of the related die', function() {
      // Note that the game object injected into the directive may have already
      // been mutated in other unit tests.
      game.dice.die2.value = null;
      var elm = $compile("<ut-die die-id='die2'></ut-die>")($rootScope);
      $rootScope.$digest();
      var d = elm.find('div');
      expect(d.text().trim()).toBe('');
      game.dice.die2.value = 6;
      $rootScope.$digest();
      expect(d.text().trim()).toBe('6');
  });

  it('sets classes correctly', function() {
      var die = game.dice.die2;
      die.canSelect = true;
      die.selected = false;
      die.assignedTo = null;
      
      var elm = $compile("<ut-die die-id='die2'></ut-die>")($rootScope);
      $rootScope.$digest();
      var d = elm.find('div');
      expect(d.hasClass('die')).toBe(true);
      expect(d.hasClass('assigned')).toBe(false);
      expect(d.hasClass('canSelect')).toBe(true);
      expect(d.hasClass('selected')).toBe(false);
      
      die.selected=true;
      die.assignedTo = {};
      $rootScope.$digest();
      expect(d.hasClass('assigned')).toBe(true);
      expect(d.hasClass('canSelect')).toBe(true);
      expect(d.hasClass('selected')).toBe(true);
  });

})