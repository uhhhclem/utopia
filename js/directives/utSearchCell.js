/* global goog */
/* global utopia */

goog.provide('utopia.directives.utsearchcell');

utopia.directives.utsearchcell.directive = function() {
    return {
        restrict: 'E',
        template: '<div>{{c.cell.value}}</div>',
        scope: {
            box: '@box',
            column: '@column',
            row: '@row',
            region: '@region',
        },
        controller: utopia.directives.utsearchcell.ctrl,
        controllerAs: 'c',
        bindToController: true
    };
}

utopia.directives.utsearchcell.ctrl = ['$scope', '$attrs', 'game', function($scope, $attrs, game) {
    var region = game.regions[this.region];
    var box = region.searchBoxes[this.box];
    this.cell = box.rows[this.row][this.column];
}];