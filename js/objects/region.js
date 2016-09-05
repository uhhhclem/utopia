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
            return sb.inProgress();
        }, this)
    }
    
    this.String = function() {
        return this.name;
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
    this.cells = [];
    
    var rows = Array(2);
    for (var row = 0; row < 2; row++) {
        rows[row] = Array(3);
        for (var column = 0; column < 3; column++) {
            rows[row][column] = new Cell(this, row, column);
            this.cells.push(rows[row][column]);
        }
    }
    this.rows = rows;
    
    // a searchBox is available if it's the one in progress or if no searchBox
    // is in progress.
    this.available = function() {
        var sb = this.region.inProgress();
        return goog.isNull(sb) || sb == this;
    };
    
    // a searchBox is in progress if any of its cells are non-empty and if
    // it's not completely filled.
    this.inProgress = function() {
        var found = goog.array.reduce(this.cells, function(r, v) {
            var c = (goog.isNull(v.die)) ? 0 : 1;
            return r + c;
        }, 0);
        return (found != 0 && found != 6);
    }
    
    this.String = function() {
        return this.region.String() + ' search box ' + this.index;
    };
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
    this.die = null;
    
    /**
     * Indicates if the cell is a valid target for assigning a die.
     * @return {boolean}
     */
    this.available = function() {
        return this.searchBox.available() && this.die == null;
    }
    
    this.String = function() {
        return this.searchBox.String() + " cell " + this.row + " " + this.column;
    };
}

});