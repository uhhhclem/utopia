/* global goog */
/* global utopia */

goog.require('utopia.constants');

goog.provide('utopia.objects.region');

goog.scope(function(){

utopia.objects.region.Region = function(key) {
    var d = utopia.constants.regions[key];
    this.number = d.number;
    this.name = d.name;
    this.days = d.days;
    
    var sb = [];
    for (var index=0; index < 6; index++) {
        sb.push(new SearchBox(this, index))
    }
    this.searchBoxes = sb;
};

/*
SearchBox represents one six-cell search box, two rows high by three columns
wide.
*/
var SearchBox = function(region, index) {
    this.region = region;
    this.index = index;
    var rows = Array(2);
    for (var row = 0; row < 2; row++) {
        rows[row] = Array(3);
        for (var column = 0; column < 3; column++) {
            rows[row][column] = new Cell(this, row, column);
        }
    }
    this.rows = rows;
}

var Cell = function(searchBox, row, column) {
    this.searchBox = searchBox;
    this.row = row;
    this.column = column;
    this.value = null;
}

});