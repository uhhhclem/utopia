goog.provide('utopia.objects.timeTrack');

utopia.objects.timeTrack.TimeTrack = function() {
  this.boxes = [
      [false, false],
      [true, false],
      [false, false],
      [false, false],
      [true, false],
      [false, false],
      [false, false],
      [true, false],
      [false, false],
      [false, false],
      [true, false],
      [false, false],
      [false, false],
      [true, false],
      [false, true],
      [false, true],
      [true, true],
      [false, true],
      [false, true],
      [true, true],
      [false, true],
      [false, true],
  ];
  this.checked = -1;
  
  this.check = function() {
      this.checked++;
  };
  
  this.event = function() {
      return this.boxes[this.checked][0];
  };
};