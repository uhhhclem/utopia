/* global expect */
/* global goog */
/* global inject */
/* global spyOn */

goog.require('utopia.module');

describe('utSearchCell', function() {
    
    var $rootScope;
    var $compile;
    var game;
    var box;
    
    beforeEach(function() {
      module('utopia');
    })

    beforeEach(inject(function(_$compile_, _$rootScope_, _game_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        game = _game_;
        box = game.regions[2].searchBoxes[1];
        spyOn(game, 'assignSelectedDie');
        spyOn(box, 'available');
    }));

  it('compiles the directive', function() {
      var elm = $compile("<ut-search-cell region='0' box='0' row='1' column='2'></ut-search-cell>")($rootScope);
      $rootScope.$digest();
      expect(elm.find('div')[0]).not.toBe(null);
  });  

  it('updates from the cell', function() {
      var elm = $compile("<ut-search-cell region='0' box='0' row='1' column='2'></ut-search-cell>")($rootScope);
      $rootScope.$digest();
      var div = elm.find('div')[0];
      var cell = game.regions[0].searchBoxes[0].rows[1][2];
      cell.value = 'theValue';
      $rootScope.$digest();
      expect(div.innerText).toBe(cell.value);
  });

  it('assigns the selected die', function() {
    game.roll();
    var die2 = game.dice.die2;
    var cell = box.rows[1][2];
    cell.value = null;

    var elm = $compile("<ut-search-cell region='2' box='1' row='1' column='2'></ut-search-cell>")($rootScope);
    var div = elm.find('div')[0];
    $rootScope.$digest();

    div.click();
    expect(box.available).not.toHaveBeenCalled();
    expect(game.assignSelectedDie).not.toHaveBeenCalled();

    game.selectDie(die2);

    div.click();
    expect(box.available).toHaveBeenCalled();
    expect(game.assignSelectedDie).toHaveBeenCalled();
  });
  
});