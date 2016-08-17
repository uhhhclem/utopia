/* global goog */
/* global utopia */

goog.provide('utopia.objects.game');

goog.require('utopia.objects.timeTrack');
goog.require('utopia.objects.die');

utopia.objects.game.Game = function() {

    this.timeTrack = new utopia.objects.timeTrack.TimeTrack();
    this.dice = {
        die1: new utopia.objects.die.Die(),
        die2: new utopia.objects.die.Die(),
    };
  
};
