/* global goog */
/* global utopia */

goog.provide('utopia.objects.die');

utopia.objects.die.Die = function(rolls) {
    this.rolls = rolls;
    this.rollsIndex = -1
    this.value = null;
    this.selected = null;
    this.assignedTo = null;
    
    this.roll = function() {
      if (!goog.isDef(this.rolls)) {
        this.value = Math.floor(Math.random() * (6)) + 1;
        return;      
      }
      this.rollsIndex++;
      this.value = this.rolls[this.rollsIndex];
    }
}