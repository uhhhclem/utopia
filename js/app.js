/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.module');

goog.require('utopia.controllers.testCtrl');

utopia.module.app = angular.module('utopia', ['ngMaterial']);

utopia.module.app.controller('testCtrl', utopia.controllers.testCtrl.ctrl);