/* global goog */
/* global utopia */

goog.provide('utopia.directives.utdie');

goog.scope(function() {

var ctrl = function($scope, $attrs, game) {
    this.die = game.dice[this.dieId];
};

ctrl.prototype.assigned = function() {
    return !(goog.isNull(this.die.assignedTo));
};

ctrl.prototype.selected = function() {
    return this.die.selected;
};

ctrl.prototype.canSelect = function() {
    return this.die.canSelect;
};

utopia.directives.utdie.directive = function() {
    return {
        bindToController: true,
        controller: ['$scope', '$attrs', 'game', ctrl],
        controllerAs: 'c',
        restrict: 'E',
        scope: {
            dieId: '@dieId',
        },
        templateUrl: 'templates/utDie.html'
    };
}

});