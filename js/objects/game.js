/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.objects.game');

goog.require('goog.array');
goog.require('utopia.constants');
goog.require('utopia.objects.die');
goog.require('utopia.objects.timeTrack');
goog.require('utopia.objects.region');

goog.scope(function() {
    
var Game = function() {

    this.timeTrack = new utopia.objects.timeTrack.TimeTrack();
    this.dice = {
        die1: new utopia.objects.die.Die(this, 'die1'),
        die2: new utopia.objects.die.Die(this, 'die2'),
    };
    this.selectedDie = null;
    
    // this.regions is ordered by region number.  Note that region number
    // starts at 1.
    var regions = Array(6);
    angular.forEach(utopia.constants.regions, function(v, k) {
        regions[v.number - 1] = new utopia.objects.region.Region(k);
    });
    this.regions = regions;
};

utopia.objects.game.Game = Game;

/**
 * Roll the game's two dice.
 */
Game.prototype.roll = function() {
    this.dice.die1.roll();
    this.dice.die2.roll();
};

/**
 * Indicates if a die can be selected.  A die can be selected if it has
 * been rolled and if it is not already selected.
 * @param {utopia.objects.Die}
 * @return {boolean}
 */
Game.prototype.canSelectDie = function(die) {
    return !goog.isNull(die) && 
        goog.isDef(die) && 
        this.selectedDie != die && 
        !goog.isNull(die.value);
};

/**
 * Select a die.
 * @param {utopia.objects.Die}
 */
Game.prototype.selectDie = function(die) {
    if (!this.canSelectDie(die)) {
        return;
    }
    if (!goog.isNull(this.selectedDie)) {
        this.selectedDie.selected = false;
    }
    this.selectedDie = die;
    this.selectedDie.selected = true;
};

/**
 * Deselect a die.
 * @param {utopia.objects.Die}
 */
Game.prototype.deselectDie = function(die) {
    if (goog.isNull(die) || !goog.isDef(die) || die != this.selectedDie) {
        return;
    }
    die.selected = false;
    this.selectedDie = null;
};

/**
 * Assign the selected die to a cell, setting the cell's value and marking
 * the die as assigned.
 * @param {utopia.objects.Cell}
 */
Game.prototype.assignSelectedDie = function(cell) {
  var die = this.selectedDie;
  if (goog.isNull(die) || !goog.isNull(cell.value)) {
      return;
  }
  cell.value = die.value;
  die.assigned = true;
}

/**
 * Returns the region that is currently in progress, i.e. the region
 * containing a partially-filled search box.
 * @return {utopia.objects.Region}
 */
Game.prototype.inProgress = function() {
    return goog.array.find(this.regions, function(r) {
        return r.inProgress();
    }, this);    
};

}); // goog.scope()

