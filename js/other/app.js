/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.module');

goog.require('utopia.controllers.dieCtrl');
goog.require('utopia.controllers.gameCtrl');

utopia.module.app = angular.module('utopia', ['ngMaterial']);

utopia.module.app.controller('gameCtrl', ['$rootScope', utopia.controllers.gameCtrl.ctrl]);
utopia.module.app.controller('dieCtrl', ['$scope', utopia.controllers.dieCtrl.ctrl]);