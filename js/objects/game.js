/* global angular */
/* global goog */
/* global utopia */

goog.provide('utopia.objects.game');

goog.require('utopia.constants');
goog.require('utopia.objects.die');
goog.require('utopia.objects.timeTrack');
goog.require('utopia.objects.region');

utopia.objects.game.Game = function() {

    this.timeTrack = new utopia.objects.timeTrack.TimeTrack();
    this.dice = {
        die1: new utopia.objects.die.Die(),
        die2: new utopia.objects.die.Die(),
    };
    this.regions = {};
    angular.forEach(utopia.constants.regions, function(v, k) {
        this.regions[k] = new utopia.objects.region.Region(k);
    }, this);
};
