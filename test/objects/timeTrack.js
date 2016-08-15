/* global expect */
/* global goog */
/* global utopia */

goog.require('utopia.objects.timeTrack');

describe('timeTrack', function(){

   it('should respond properly when a box is checked', function() {
       var obj = new utopia.objects.timeTrack();
       obj.check();
       expect(obj.event()).toBe(false);
       obj.check();
       expect(obj.event()).toBe(true);
   });
});