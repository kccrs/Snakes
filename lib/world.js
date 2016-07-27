function World(width, height) {
  this.width = 100;
  this.height = 100;
  this.snakes = [];
  this.food = [];
}

World.prototype.addSnake = function (snake) {
  snake.world = this;
  this.snakes.push(snake);
};

World.prototype.addFood = function (food) {
  food.world = this;
  this.food.push(food);
};

World.prototype.rightArrow = function () {
  this.snakes.forEach(function (snake) {
    snake.moveRight();
  });
};












module.exports = World;
