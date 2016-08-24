/* global goog */
/* global utopia */

goog.provide('utopia.directives.utsearchbox');

goog.scope(function(){

var ctrl = ['$scope', 'game', function($scope, game) {
}];

utopia.directives.utsearchbox.directive = function() {
    return {
        bindToController: true,
        controller: ctrl,
        controllerAs: 'c',
        scope: {
            box: '@box',
            region: '@region'
        },
        restrict: 'E',
        templateUrl: 'templates/utSearchBox.html'
    }
}

});