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
    
    it('should pass', function() {
        expect(true).toBe(true);
    });
    
    it('should initialize with data', function(){
        var ctrl = $controller('testCtrl', {});
        expect(ctrl.data.field1).toBe('value1');
    });
}); 