/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.die');

describe('Die', function() {
    
    it('should use mocked-out rolls', function() {
        var obj = new utopia.objects.die.Die([1, 2, 3, 4, 5, 6])
        obj.roll();
        expect(obj.value).toBe(1);
        obj.roll()
        expect(obj.value).toBe(2);
    });
    
    it('should work if rolls aren\'t mocked', function(){
        var obj = new utopia.objects.die.Die();
        obj.roll()
        expect(1 <= obj.value <= 6).toBeTruthy();
    });
})