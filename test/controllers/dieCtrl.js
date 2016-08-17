/* global expect */
/* global goog */
/* global inject */
/* global spyOn */

goog.require('utopia.module');

describe('dieCtrl', function(){

    var $controller;
    var rootScope;
    var scope;
    var ctrl

    beforeEach(function() {
        module('utopia');
    })
    
    beforeEach(inject(function(_$controller_, $rootScope){
        $controller = _$controller_;
        rootScope = $rootScope;
        scope = $rootScope.$new();
        ctrl = $controller('dieCtrl', {$scope: scope});
    }));
    
    it('should use injected rolls', function(){
        ctrl.rolls = [1, 2, 3];
        ctrl.roll();
        expect(ctrl.die.value).toBe(1);
        ctrl.roll();
        expect(ctrl.die.value).toBe(2);
        ctrl.roll();
        expect(ctrl.die.value).toBe(3);
    });
    
    it('should roll without injected rolls', function(){
        ctrl.roll();
        expect(1 <= ctrl.die.value <=6).toBeTruthy();
    });
    
    it('should roll when a roll event is received', function() {
        spyOn(ctrl, 'roll')
        rootScope.$broadcast('roll');
        expect(ctrl.roll).toHaveBeenCalled();
    })
}); 