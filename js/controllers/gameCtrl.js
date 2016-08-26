/* global goog */
/* global utopia */

goog.provide('utopia.controllers.gameCtrl');

utopia.controllers.gameCtrl.ctrl = ['game', function(game) {
    this.game = game;
    
    this.roll = function() { 
        this.game.roll();
    };
}];