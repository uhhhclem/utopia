/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.searchActivity');

describe('searchActivity', function(){
    var obj;
    beforeEach(function(){
        obj = new utopia.objects.searchActivity.SearchActivity('hp');
    });
    
    it('should be instantiated', function(){
        expect(obj).not.toBe(null);
    });
    
    it('should be initialized with region data', function() {
        expect(obj.regionData.name).toBe('Halebeard Peak');
    });
});