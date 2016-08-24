/* global goog */
/* global utopia */

goog.provide('utopia.directives.utsearchcell');

goog.scope(function() {

var ctrl = ['$scope', '$attrs', 'game', function($scope, $attrs, game) {
    var region = game.regions[this.region];
    var box = region.searchBoxes[this.box];
    this.cell = box.rows[this.row][this.column];
}];

utopia.directives.utsearchcell.directive = function() {
    return {
        bindToController: true,
        controller: ctrl,
        controllerAs: 'c',
        restrict: 'E',
        scope: {
            box: '@box',
            column: '@column',
            row: '@row',
            region: '@region',
        },
        template: '<div>{{c.cell.value}}</div>'
    };
}

});