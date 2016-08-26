/* global expect */
/* global goog */
/* global inject */
/* global spyOn */

goog.require('utopia.module');

describe('utDie', function() {
    
    var $rootScope;
    var $compile;
    var game;
    
    beforeEach(function() {
      module('utopia');
    })

    beforeEach(inject(function(_$compile_, _$rootScope_, _game_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        game = _game_;
    }));

  it('compiles the directive', function() {
      game.dice.die2.value = null;
      var elm = $compile("<ut-die die-id='die2'></ut-die>")($rootScope);
      $rootScope.$digest();
      expect(elm.html()).toContain('></div>');
      game.dice.die2.value = 6;
      $rootScope.$digest();
      expect(elm.html()).toContain('>6</div>');
  });

})