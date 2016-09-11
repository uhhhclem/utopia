/* global goog */
/* global utopia */

goog.provide('utopia.directives.utsearchcell');

goog.scope(function() {

var ctrl = function($scope, $attrs, game) {
    var region = game.regions[this.region];
    this.searchBox = region.searchBoxes[this.box];
    this.cell = this.searchBox.rows[this.row][this.column];
    this.game = game;
};

ctrl.prototype.click = function() {
  if (goog.isNull(this.game.selectedDie)) {
    return;
  }
  if (!this.searchBox.available() && !goog.isNull(this.cell.value)) {
    return;
  }
  this.game.assignSelectedDie(this.cell);
};

utopia.directives.utsearchcell.directive = function() {
    return {
        bindToController: true,
        controller: ['$scope', '$attrs', 'game', ctrl],
        controllerAs: 'c',
        restrict: 'E',
        scope: {
            box: '@box',
            column: '@column',
            row: '@row',
            region: '@region',
        },
        template: '<div ng-click="c.click()">{{c.cell.value}}</div>'
    };
}

});