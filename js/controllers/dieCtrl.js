/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.controllers.dieCtrl');

goog.require('utopia.objects.die');

utopia.controllers.dieCtrl.ctrl = function($scope){
    this.rolls = undefined;
    this.die = null;

    this.roll = function() {
        if (goog.isNull(this.die)) {
            this.die = new utopia.objects.die.Die(this.rolls);
        }
        this.die.roll();
    };
    
    this.select = function() {
        this.die.selected = !this.selected;
    };
    
    var self = this;
    $scope.$on('roll', function(event, args){
        self.roll();
    });
}