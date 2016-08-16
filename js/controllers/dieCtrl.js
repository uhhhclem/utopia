/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.controllers.dieCtrl');

goog.require('utopia.objects.die')

utopia.controllers.dieCtrl.ctrl = function($scope){
    this.rolls = undefined;
    this.die = null;
    this.value = null;
    this.selected = false;
    this.assigned = false;

    this.roll = function() {
        if (goog.isNull(this.die)) {
            this.die = new utopia.objects.die.Die(this.rolls);
        }
        this.value = this.die.roll();
    };
    
    this.select = function() {
        this.selected = !this.selected;
    };
    
    this.assign = function() {
        this.assigned = !this.assigned;
    };
    
    var self = this;
    $scope.$on('roll', function(event, args){
        self.roll();
    });
}