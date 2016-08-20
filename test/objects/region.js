/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.region');

describe('Region', function(){
    var obj;
    beforeEach(function(){
        obj = new utopia.objects.region.Region('hp');
    });
    
    it('should be instantiated', function(){
        expect(obj).not.toBe(null);
    });
    
    it('should be initialized with region data', function() {
        expect(obj.name).toBe('Halebeard Peak');
    });
    
    it('should have its search boxes initialized', function() {
        var index = 4;
        var row = 1;
        var column = 1;
        var sb = obj.searchBoxes[index];
        var cell = sb.rows[row][column];
        expect(cell.searchBox.region).toBe(obj)
        expect(cell.searchBox.index).toBe(index);
        expect(cell.row).toBe(row);
        expect(cell.column).toBe(column);
    })
});