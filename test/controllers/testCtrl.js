/* global expect */
/* global goog */
/* global inject */

goog.require('utopia.controllers.testCtrl');

describe('testCtrl', function(){

    beforeEach(module('utopia'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    it('should use injected rolls', function(){
        var ctrl = $controller('testCtrl', {});
        ctrl.rolls1 = [1, 2, 3];
        ctrl.rolls2 = [4, 5, 6];
        ctrl.roll();
        expect(ctrl.dice.die1).toBe(1);
        expect(ctrl.dice.die2).toBe(4);
        ctrl.roll();
        expect(ctrl.dice.die1).toBe(2);
        expect(ctrl.dice.die2).toBe(5);
    });
    
    it('should roll without injected rolls', function(){
        var ctrl = $controller('testCtrl');
        ctrl.roll();
        expect(1 <= ctrl.dice.die1 <=6).toBeTruthy();
        expect(1 <= ctrl.dice.die2 <=6).toBeTruthy();
    })
}); 