/* global expect */
/* global goog */
/* global inject */
/* global spyOn */

goog.require('utopia.module');

describe('gameCtrl', function() {
    
    var $rootScope;
    var $controller;
    
    beforeEach(function() {
        module('utopia');
    })
    

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    
    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
        spyOn($rootScope, '$broadcast');
    }));
    
    it('should broadcast the roll event', function() {
        var ctrl = $controller('gameCtrl', {});
        ctrl.roll();
        expect($rootScope.$broadcast).toHaveBeenCalledWith('roll');
    })
    
    it('should instantiate the game object', function() {
        var ctrl = $controller('gameCtrl', {});
        expect(ctrl.game).toBeDefined();
        expect(ctrl.game.regions.length).toBe(6);
        expect(ctrl.game.regions[0].name).toBe('Halebeard Peak');
    });
})