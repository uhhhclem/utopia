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
        die1: new utopia.objects.die.Die(this),
        die2: new utopia.objects.die.Die(this),
    };
    this.selectedDie = null;
    
    // this.regions is ordered by region number.  Note that region number
    // starts at 1.
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

Game.prototype.selectDie = function(die) {
    if (goog.isNull(die) || !goog.isDef(die) || this.selectedDie == die) {
        return;
    }
    if (!goog.isNull(this.selectedDie)) {
        this.selectedDie.selected = false;
    }
    this.selectedDie = die;
    this.selectedDie.selected = true;
}

Game.prototype.deselectDie = function(die) {
    if (goog.isNull(die) || !goog.isDef(die) || die != this.selectedDie) {
        return;
    }
    die.selected = false;
    this.selectedDie = null;
    
}

utopia.objects.game.Game = Game;

});

