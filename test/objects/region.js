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
    });
    
    it('should track which search box is in progress', function() {
        expect(obj.inProgress()).toBeNull();
        var sb2 = obj.searchBoxes[2];
        var sb3 = obj.searchBoxes[3];
        expect(sb2.available()).toBe(true);
        expect(sb3.available()).toBe(true);

        sb2.rows[0][1].die = 'die';
        expect(obj.inProgress().toString()).toBe(sb2.toString());
        expect(sb2.available()).toBe(true);
        expect(sb3.available()).toBe(false);

        for (var i = 0; i < sb2.cells.length; i++) {
            sb2.cells[i].die = 'die';
        }        
        expect(obj.inProgress()).toBeNull();
        expect(sb2.available()).toBe(true);
        expect(sb3.available()).toBe(true);
    });
    
});