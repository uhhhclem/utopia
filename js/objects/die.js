/* global goog */
/* global utopia */

goog.provide('utopia.objects.die');

goog.scope(function() {

var Die = function(game, id) {
  this.game = game;
  this.id = id;
  this.value = null;
  
  this.selected = false;
  this.assignedTo = null;
  
Die.prototype.roll = function() {
  this.value = Math.floor(Math.random() * (6)) + 1;
};

};

Die.prototype.canSelect = function() {
  return this.game.canSelectDie(this);
};

Die.prototype.select = function() {
  this.game.selectDie(this);
};

Die.prototype.deselect = function() {
  this.game.deselectDie(this);
}

Die.prototype.toString = function() {
  return this.id;
}

utopia.objects.die.Die = Die;

});