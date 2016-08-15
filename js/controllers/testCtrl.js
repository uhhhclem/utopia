/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.controllers.testCtrl');

goog.require('utopia.objects.die')

utopia.controllers.testCtrl.ctrl = function(){
    this.rolls1 = undefined;
    this.rolls2 = undefined;
    this.dice = {
        die1: null,
        die2: null,
    };
    
    this.roll = function() {
        if (!goog.isDef(this.die1)) {
            this.die1 = new utopia.objects.die.Die(this.rolls1);
            this.die2 = new utopia.objects.die.Die(this.rolls2);
        }
        this.dice = {
          die1: this.die1.roll(),
          die2: this.die2.roll()
        }
    }
}