/* global goog */
/* global utopia */

goog.require('utopia.constants');

goog.provide('utopia.objects.region');

utopia.objects.region.Region = function(key) {
    var d = utopia.constants.regions[key];
    this.number = d.number;
    this.name = d.name;
    this.days = d.days;
    
    var sb = [];
    for (var i = 0; i < 6; i++) {
        sb.push([[null, null, null], [null, null, null]]);    
    }
    this.searchBoxes = sb;
};