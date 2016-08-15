goog.provide('utopia.objects.die');

utopia.objects.die.Die = function(rolls) {
    this.rolls = rolls;
    this.rollsIndex = -1;
    
    this.roll = function() {
      if (goog.isDef(this.rolls)) {
          this.rollsIndex++;
          return this.rolls[this.rollsIndex];
      }
      return Math.floor(Math.random() * (6)) + 1;
    }
}