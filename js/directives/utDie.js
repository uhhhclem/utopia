/* global goog */
/* global utopia */

goog.provide('utopia.directives.utdie');

goog.scope(function() {

var ctrl = ['$scope', '$attrs', 'game', function($scope, $attrs, game) {
    this.die = game.dice[this.dieId];
}];

utopia.directives.utdie.directive = function() {
    return {
        bindToController: true,
        controller: ctrl,
        controllerAs: 'c',
        restrict: 'E',
        scope: {
            dieId: '@dieId',
        },
        template: '<div class="die">{{c.die.value}}</div>'
    };
}

});