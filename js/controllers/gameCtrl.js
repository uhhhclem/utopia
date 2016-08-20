/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.controllers.gameCtrl');

utopia.controllers.gameCtrl.ctrl = function($rootScope, game) {
    this.$rootScope = $rootScope;
    this.game = game;
    
    this.roll = function() {
        $rootScope.$broadcast('roll');
    };
}