/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.objects.game');

goog.require('utopia.constants');
goog.require('utopia.objects.die');
goog.require('utopia.objects.timeTrack');
goog.require('utopia.objects.region');

goog.scope(function() {
    
var Game = function() {

    this.timeTrack = new utopia.objects.timeTrack.TimeTrack();
    this.dice = {
        die1: new utopia.objects.die.Die(),
        die2: new utopia.objects.die.Die(),
    };
    
    // this.regions is ordered by region number.
    var regions = Array(6);
    angular.forEach(utopia.constants.regions, function(v, k) {
        regions[v.number - 1] = new utopia.objects.region.Region(k);
    });
    this.regions =regions;
    
};

Game.prototype.roll = function() {
    this.dice.die1.roll();
    this.dice.die2.roll();
};

utopia.objects.game.Game = Game;

});

