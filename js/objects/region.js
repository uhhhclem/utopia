/* global goog */
/* global utopia */

goog.require('goog.array');
goog.require('utopia.constants');

goog.provide('utopia.objects.region');

goog.scope(function() {

/**
 * A Region is one of the six regions in the game.
 * @constructor
 */
var Region = function(key) {
    var d = utopia.constants.regions[key];
    this.number = d.number;
    this.name = d.name;
    this.days = d.days;
    
    var sb = [];
    for (var index=0; index < 6; index++) {
        sb.push(new SearchBox(this, index));
    }
    this.searchBoxes = sb;
};

utopia.objects.region.Region = Region;

/**
 * Indicates if the region contains a search box that is partially
 * filled.
 * @return {boolean}
 */
Region.prototype.inProgress = function() {
    return goog.array.find(this.searchBoxes, function(sb) {
        return sb.inProgress();
    }, this);
};

Region.prototype.toString = function() {
    return this.name;
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
};

/**
 * Indicates if the search box is a valid target for assigning a die.
 * A search box is available if it's in progress (partially filled) or
 * if no other search box is in progress.
 * @return {boolean}
 */
SearchBox.prototype.available = function() {
    var sb = this.region.inProgress();
    return goog.isNull(sb) || sb == this;  
};

/**
 * Indicates if the search box is partially filled.
 * @return {boolean}
 */
SearchBox.prototype.inProgress = function() {
    var found = goog.array.reduce(this.cells, function(r, v) {
        var c = (goog.isNull(v.value)) ? 0 : 1;
        return r + c;
    }, 0);
    return (found != 0 && found != 6);
};
    
SearchBox.prototype.toString = function() {
    return this.region.toString() + ' search box ' + this.index;
};

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
    
};

/**
 * Indicates if the cell is a valid target for assigning a die.
 * @return {boolean}
 */
Cell.prototype.available = function() {
    return this.searchBox.available() && this.die == null;
};

Cell.prototype.toString = function() {
    return this.searchBox.toString() + " cell " + this.row + " " + this.column;
};

}); // goog.scope()