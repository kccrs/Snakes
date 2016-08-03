// const Food = require('../lib/food');
// const World = require('../lib/world');

function Snake(x, y, width = 20, height = 20, direction, world){
  this.x = x || 0;
  this.y = y || 0;
  this.snakeBodyWidth = width;
  this.snakeBodyHeight = height;
  this.snakeBodySections = [];
  this.direction = direction;
  this.addSegment(x, y, width, height);
}

Snake.prototype.snakeHead = function () {
  return this.snakeBodySections[0];
};

Snake.prototype.snakeButt = function() {
  return this.snakeBodySections[this.snakeBodySections.length - 1];
};

Snake.prototype.addSegment = function (x, y, snakeBodyWidth, snakeBodyHeight) {

  var snakeBody = {
    x: x,
    y: y,
    width: this.snakeBodyWidth,
    height: this.snakeBodyHeight
  };

  this.snakeBodySections.push(snakeBody);
  for (var i = 1; i < this.snakeBodySections.length; i++) {
    if (this.snakeBodySections[i].next === null) {
      this.snakeBodySections[i].next = snakeBody;
      break;
    }
  }
};

Snake.prototype.grow = function() {

  var snakeButt = this.snakeButt();

  if (this.direction === 'up') {
    this.addSegment(snakeButt.x, snakeButt.y + 20 + this.snakeBodyHeight);
  }
  if (this.direction === 'down') {
    this.addSegment(snakeButt.x, snakeButt.y + 20 - this.snakeBodyHeight);
  }
  if (this.direction === 'left') {
    this.addSegment(snakeButt.x + this.snakeBodyWidth, snakeButt.y);
  }
  if (this.direction === 'right') {
    this.addSegment(snakeButt.x - this.snakeBodyWidth, snakeButt.y);
}
};

Snake.prototype.moveSegments = function (offsetX, offsetY) {
  var previousX, previousY;

  var snakeHead = this.snakeHead();

  previousX = snakeHead.x;
  previousY = snakeHead.y;

  snakeHead.x = snakeHead.x + offsetX;
  snakeHead.y = snakeHead.y + offsetY;

  for (var i = 1; i < this.snakeBodySections.length; i++) {
    var current = this.snakeBodySections[i];

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
    return (this.x = 580);
  }
};

Snake.prototype.moveLeft = function () {
  this.x -=20;
  this.direction = 'left';
  this.moveSegments(-20, 0);
  if (this.x === -20) {
    return (this.x = 0);
  }
};

Snake.prototype.moveDown = function () {
  this.y +=20;
  this.direction = 'down';
  this.moveSegments(0, 20);
  if (this.y === 400) {
    return (this.y = 380);
  }
};

Snake.prototype.moveUp = function () {
  this.y -=20;
  this.direction = 'up';
  this.moveSegments(0, -20);
  if (this.y === -20) {
    return (this.y = 0);
  }
};

module.exports = Snake;
