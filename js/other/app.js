/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.module');

goog.require('utopia.controllers.gameCtrl');
goog.require('utopia.directives.utdie');
goog.require('utopia.directives.utsearchbox');
goog.require('utopia.directives.utsearchcell');
goog.require('utopia.objects.game');

utopia.module.app = angular.module('utopia', ['ngMaterial']);

// Make the Game object a constant that can be injected into controllers
// such as gameCtrl below.
utopia.module.app.constant('game', new(utopia.objects.game.Game));

utopia.module.app.controller('gameCtrl', utopia.controllers.gameCtrl.ctrl);

utopia.module.app.directive('utDie', utopia.directives.utdie.directive);
utopia.module.app.directive('utSearchBox', utopia.directives.utsearchbox.directive);
utopia.module.app.directive('utSearchCell', utopia.directives.utsearchcell.directive);

