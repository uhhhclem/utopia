/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.controllers.gameCtrl');

utopia.controllers.gameCtrl.ctrl = function($rootScope){
    this.$rootScope = $rootScope;
    
    this.roll = function() {
        $rootScope.$broadcast('roll');
    };
}