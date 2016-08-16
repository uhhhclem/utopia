/* global expect */
/* global goog */
/* global inject */
/* global spyOn */

goog.require('utopia.controllers.gameCtrl');

describe('gameCtrl', function() {
    
    var $rootScope;
    var $controller;
    
    beforeEach(module('utopia'));
    
    
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
})