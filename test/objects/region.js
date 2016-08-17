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
});