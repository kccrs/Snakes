// const Food = require('../lib/food');
// const World = require('../lib/world');

function Snake(x, y, width = 20, height = 20, direction, world){
  this.x = x || 0;
  this.y = y || 0;
  this.segmentWidth = width;
  this.segmentHeight = height;
  this.segments = [];
  this.direction = direction;
  this.addSegment(x, y, width, height);
  this.world = world;
}

Snake.prototype.head = function () {
  return this.segments[0];
};

Snake.prototype.last = function() {
  return this.segments[this.segments.length - 1];
};


Snake.prototype.addSegment = function (x, y, segmentWidth, segmentHeight) {

  var segment = {
    x: x,
    y: y,
    width: this.segmentWidth,
    height: this.segmentHeight
  };

  this.segments.push(segment);
  for (var i = 1; i < this.segments.length; i++) {
    if (this.segments[i].next === null) {
      this.segments[i].next = segment;
      break;
    }
  }
};

Snake.prototype.grow = function() {

  var last = this.last();

  if (this.direction === 'up') {
    this.addSegment(last.x, last.y + 20 + this.segmentHeight);
  }
  if (this.direction === 'down') {
    this.addSegment(last.x, last.y + 20 - this.segmentHeight);
  }
  if (this.direction === 'left') {
    this.addSegment(last.x + this.segmentWidth, last.y);
  }
  if (this.direction === 'right') {
    this.addSegment(last.x - this.segmentWidth, last.y);
}
};

Snake.prototype.moveSegments = function (offsetX, offsetY) {
  var previousX, previousY;
  //var oldXValue, oldYValue;

  var head = this.head();

  previousX = head.x;
  previousY = head.y;

  head.x = head.x + offsetX;
  head.y = head.y + offsetY;

  for (var i = 1; i < this.segments.length; i++) {
    var current = this.segments[i];

    var x = current.x;
    var y = current.y;

    current.x = previousX;
    current.y = previousY;

    previousX = x;
    previousY = y;
  }
};


// THIS CONTROLS HOW FAST THE SNAKE IS MOVING WHEN THE ARROWS ARE PRESSED
Snake.prototype.moveRight = function () {
  this.x +=20;
  this.direction = 'right';
  this.moveSegments(20, 0);
  if (this.x >= 600) {
    // this.endGame();
    return (this.x = 580);
  }
};

Snake.prototype.moveLeft = function () {
  this.x -=20;
  this.direction = 'left';
  this.moveSegments(-20, 0);
  if (this.x === -20) {
    // this.endGame();
    return (this.x = 0);
  }
};

Snake.prototype.moveDown = function () {
  this.y +=20;
  this.direction = 'down';
  this.moveSegments(0, 20);
  if (this.y === 400) {
    // this.endGame();
    return (this.y = 380);
  }
};

Snake.prototype.moveUp = function () {
  this.y -=20;
  this.direction = 'up';
  this.moveSegments(0, -20);
  if (this.y === -20) {
    // world.endGame();
    return (this.y = 0);
  }
};


// Snake.prototype.endGame = function() {
//   console.log('😱Oh no, Game Over!!');
// };

module.exports = Snake;
