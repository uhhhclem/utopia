/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.module');

goog.require('utopia.controllers.dieCtrl');
goog.require('utopia.controllers.gameCtrl');
goog.require('utopia.directives.utsearchcell');
goog.require('utopia.objects.game');

utopia.module.app = angular.module('utopia', ['ngMaterial']);

utopia.module.app.constant('game', new(utopia.objects.game.Game));

utopia.module.app.controller('gameCtrl', ['$rootScope', 'game', utopia.controllers.gameCtrl.ctrl]);
utopia.module.app.controller('dieCtrl', ['$scope', utopia.controllers.dieCtrl.ctrl]);

utopia.module.app.directive('utSearchCell', utopia.directives.utsearchcell.directive);

