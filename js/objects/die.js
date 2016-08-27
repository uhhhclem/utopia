/* global goog */
/* global utopia */

goog.provide('utopia.objects.die');

goog.scope(function() {

var Die = function(game, rolls) {
  this.game = game;
  this.rolls = rolls;
  this.rollsIndex = -1;
  this.value = null;
  
  this.selected = false;
  this.assignedTo = null;
  
Die.prototype.roll = function() {
  if (!goog.isDef(this.rolls)) {
    this.value = Math.floor(Math.random() * (6)) + 1;
    return;      
  }
  this.rollsIndex++;
  this.value = this.rolls[this.rollsIndex];
};

};

Die.prototype.canSelect = function() {
  if (goog.isNull(this.value)) {
    return false;
  }
  if (this.selected) {
    return false;
  }
  return true;
}

Die.prototype.select = function() {
  if (!this.canSelect) {
    return;
  }
  this.game.selectDie(this);
};

Die.prototype.deselect = function() {
  if (!this.selected) {
    return;
  }
  this.selected = false;
}

utopia.objects.die.Die = Die;

});