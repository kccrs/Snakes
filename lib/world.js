function World(width, height) {
  this.width = 100;
  this.height = 100;
  // this.snake = new Snake(options, this);
  // this.food = new Food();
}


World.prototype.rightArrow= function () {
  this.snakes.forEach(function (snake) {
    snake.moveRight();
  });
};












module.exports = World;
