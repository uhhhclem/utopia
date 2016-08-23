/* global expect */
/* global goog */
/* global inject */
/* global spyOn */

goog.require('utopia.module');

describe('utSearchCell', function() {
    
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
      var elm = $compile("<ut-search-cell region='0' box='0' row='1' column='2'></ut-search-cell>")($rootScope);
      $rootScope.$digest();
      game.regions[0].searchBoxes[0].rows[1][2].value = 'theValue';
      $rootScope.$digest();
      expect(elm.html()).toContain('theValue');
  });  

})