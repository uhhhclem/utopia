/* global expect */
/* global goog */
/* global inject */
/* global spyOn */

goog.require('utopia.module');

describe('utSearchBox', function() {
    
    var $rootScope;
    var $compile;
    var $templateCache;
    var game;
    
    beforeEach(module('templates'));
    beforeEach(module('utopia'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_, _game_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $templateCache = _$templateCache_,
        game = _game_;
    }));

  it('compiles the directive', function() {
      var elm = $compile("<ut-search-box region='4' box='1'></ut-search-box>")($rootScope);
      $rootScope.$digest();
      // verify that atttributes on directive get passed through to template
      expect(elm.html()).toContain('<ut-search-cell region="4" box="1"')
  });  

})