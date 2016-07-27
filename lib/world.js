function World(width, height, snakes, food) {
  this.width = 100;
  this.height = 100;
  this.snakes = [];
  this.food = [];
}

World.prototype.addSnake = function (snake) {
  block.world = this;
  this.snakes.push(snake);
};

World.prototype.addFood = function (food) {
  food.world = this;
  this.food.push(food);
};












module.exports = World;
