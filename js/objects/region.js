/* global goog */
/* global utopia */

goog.require('goog.array');
goog.require('utopia.constants');

goog.provide('utopia.objects.region');

goog.scope(function(){

/**
 * A Region is one of the six reguins in the game.
 * @constructor
 */
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
    
    this.inProgress = function() {
        return goog.array.find(this.searchBoxes, function(sb) {
            return sb.inProgress;
        }, this)
    }
};

/**
 * SearchBox represents one six-cell search box, two rows high by three columns
 * wide.
 * @param {Region} region The Region that owns the SearchBox.
 * @param {number} index The index (0-5) into the Region's array of SearchBoxes.
 * @constructor
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
    
    this.inProgress = false;
    
    this.available = function() {
        var sb = this.region.inProgress();
        return goog.isNull(sb) || sb == this;
    }
    
}

/**
 * Cell is an individual cell in a search box.
 * @param {SearchBox} searchBox The SearchBox owning this cell.
 * @param {number} row The row (0-1) of the Cell.
 * @param {number} column The column (0-5) of the Cell.
 * @constructor
 */
var Cell = function(searchBox, row, column) {
    this.searchBox = searchBox;
    this.row = row;
    this.column = column;
    this.value = null;
    
    /**
     * Indicates if the cell is a valid target for assigning a die.
     * @return {boolean}
     */
    this.available = function() {
        return this.searchBox.available() && this.value == null;
    }
}

});