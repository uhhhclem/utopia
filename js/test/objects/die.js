/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.die');

describe('die', function() {
    
    it('should use mocked-out rolls', function() {
        var obj = new utopia.objects.die([1, 2, 3, 4, 5, 6])
        expect(obj.roll()).toBe(1);
        expect(obj.roll()).toBe(2);
    });
    
    it('should work if rolls aren\'t mocked', function(){
        var obj = new utopia.objects.die();
        expect(1 <= obj.roll() <= 6).toBeTruthy();
    });
})